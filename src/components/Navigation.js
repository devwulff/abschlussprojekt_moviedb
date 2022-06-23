import { Link } from "react-router-dom";
import Request from "./Request";


const Navigation = () => {
    // const [input, setInput] = useState("");

    return (
        <div>
            <h1>Navigation Placeholder</h1>
            <Link to="/">
                <button className="button">HOME</button>
            </Link>
            <input
                type="text"
                name="search"
                id="searchbar"
                placeholder="Type Movie here"
            // onChange={(e) => setInput(e.target.value)}
            />
            <Link to="/filter">
                <button className="button">Filtern</button>
            </Link>
            {/* <Link className="btn" to={`/MovieItem/${input}`}>
                Search
            </Link> */}
        </div >
    );
};

export default Navigation;