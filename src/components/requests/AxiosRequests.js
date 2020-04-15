import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import Login from './components/start/Login';
// import RegisterForm from './components/start/RegisterForm';


export default function AxiosRequests () {

    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('reacthooks');

    useEffect( () => {
        getResults();
    }, []);

    const getResults = async () => {
        const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
        setResults(response.data.hits)
    };
    const handleSearch = (event)=> {
        event.preventDefault();
        getResults();
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <input type="text" onChange={(event) => setQuery(event.target.value)} value={query}/>
                <button type="submit">search</button>
            </form>

            <ul>
                {results.map(result => (
                    <li key={result.objectID}>
                        <a href={result.url}>{result.title}</a>
                    </li>
                ))}
            </ul>

        </>
    )
};
