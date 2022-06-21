import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Trailer = () => {

    const { id } = useParams();

    const [trailer, setTrailer] = useState([]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?&api_key=80fc0be7bcb18707550c86f288ec17fe`)
            .then((response) => response.json())
            .then((json) => setTrailer(json.results));
    }, [id]);

    console.log(trailer);

    return (
        <div>

            <div>

                {trailer.map((elt, i) => {
                    if (elt.type === "Trailer" && elt.name === "Official Trailer" || elt.name === "Trailer") {
                        console.log(elt.key)

                        return (
                            <div key={i}>
                                <h3>Trailer</h3>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${elt.key}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )
                    }
                }
                )}
            </div>
        </div>
    );
};

export default Trailer;