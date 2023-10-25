import {takeLatest, put, fork, call} from "redux-saga/effects";
import { getMovies, setMovies, setMovie, getMovie } from "./feature/movieSlice";
import { fetchMovie,  fetchNovies } from "./api";

function* onLoadMoviesAsync({payload}){
    try {
        const movieName = payload;
        const response = yield call(fetchNovies, movieName);
        if(response.status === 200){
            yield put(setMovies({...response.data}))
        }
    }catch (error) {
        console.log(error)
    }
}

function* onLoadMovieAsync({ payload }) {
    try {
      const movieId = payload;
      const response = yield call(fetchMovie, movieId);
      if (response.status === 200) {
        yield put(setMovie({ ...response.data }));
      }
    } catch (error) {
      console.log(error);
    }
  }


function* onLoadMovies() {
    yield takeLatest(getMovies.type, onLoadMoviesAsync)
}

function* onLoadMovie() {
    yield takeLatest(getMovie.type, onLoadMovieAsync)
}

export const moviesSagas =  [fork(onLoadMovies), fork(onLoadMovie)];