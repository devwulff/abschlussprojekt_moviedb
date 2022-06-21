import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Genres = () => {

    const { id } = useParams();
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=80fc0be7bcb18707550c86f288ec17fe&language=de-DE`)
            .then(response => response.json())
            .then(json => setGenres(json.genres))
    }, [id])

    console.log(genres)
    return (<div>
        {genres.map((elt, i) =>
            <ul>
                <li key={i}>{elt.name}</li>
            </ul>

        )}

    </div>);
}

export default Genres;