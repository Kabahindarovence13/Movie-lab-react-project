import React from 'react';
const movies = ({ movies }) => {
    return (
        console.log(
        <div>
            <h1 style={{ color: 'red' }}>My movielib</h1>
            <center><h1 style={{ backgroundColor: 'tan' }}>Movie List</h1></center>
            {movies.map((movies) =>
                <div class="movies">
                    <div class="movie-body">
                        <h5 class="title">{movies.title}</h5>
                        <h6 class="genre">{movies.genre}</h6>
                        <p class="id">{movies.id}</p>

                    </div>
                </div>
            )
            }
        </div>
        )

    )
};
export default movies;