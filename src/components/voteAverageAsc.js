import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navigation from './Navigation';

const Filter = () => {

    const [VoteCountAsc, setVoteCountAsc] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=de-DE&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
            .then(response => response.json())
            .then(json => setVoteCountAsc(json.results))
    }, [])

    console.log(VoteCountAsc);
    return (<div>
        <Navigation />
        {VoteCountAsc.map((elt, i) =>
            <div key={i}>
                <img src={`https://image.tmdb.org/t/p/w500${elt.poster_path}`} alt="Foto zum Film" />
                <h2>{elt.title}</h2>
                <Link to={`/details/${elt.id}`}>Detailseite</Link>
            </div>
        )}
    </div>);
}

export default Filter;