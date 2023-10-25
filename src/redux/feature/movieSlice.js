const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        moviesList: [],
        movie: {},
    },

    reducers: {
        getMovies(name){
            return name
        },
       
        setMovies: (state, action) => {
            state.moviesList = action.payload;
        },
        setMovie: (state, action) => {
            state.moviesList = action.payload;
        }, 
        getMovie(id) {
            return id;
          },
          setMovie: (state, action) => {
            state.movie = action.payload;
          },
    }

});

export const {getMovies, setMovies,setMovie, getMovie} = movieSlice.actions;
export default movieSlice.reducer;