import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

const MovieList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/4/list/8207676?page=1&api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE&append_to_response=videos,images`
        )
            .then((response) => response.json())
            .then((data) => setData(data.results))

    }, []);

    console.log(data);


    return (
        <div>
            {data.map((elt, i) => {

                return (
                    <MovieItem
                        key={i}
                        id={elt.id}
                        title={elt.title}
                        year={elt.release_date.slice(0, 4)}
                        img={elt.poster_path}
                    />
                );
            })}
        </div>
    );
};
export default MovieList;
