// 80fc0be7bcb18707550c86f288ec17fe
import { Link } from 'react-router-dom';

const MovieItem = (props) => {


    return (<div>
        <Link to={`/details/${props.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="Bild des Films" />
            <h2>{props.title}</h2>
            <p>{props.year}</p>
        </Link>
    </div>);
}

export default MovieItem;