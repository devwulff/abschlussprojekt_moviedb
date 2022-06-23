import { useState, useEffect } from 'react';

const Request = () => {


    const [requestToken, setRequestToken] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=80fc0be7bcb18707550c86f288ec17fe')
            .then(response => response.json())
            .then(json => setRequestToken(json.results))
    }, [])

    console.log(requestToken);

    return (<div>
        <button>Token</button>
    </div>);
}

export default Request;
