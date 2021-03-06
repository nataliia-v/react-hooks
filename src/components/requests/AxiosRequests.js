import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
// import Login from './components/start/Login';
// import RegisterForm from './components/start/RegisterForm';


export default function AxiosRequests () {

    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('reacthooks');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchInputRef = useRef();

    useEffect( () => {
        getResults();
    }, []);

    const getResults = async () => {
        setLoading(true);
        
        try {
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
            setResults(response.data.hits);
        } catch (e) {
            setError(e)
        }
        
        
        setLoading(false);
    };
    const handleSearch = (event)=> {
        event.preventDefault();
        getResults();
    };
    const handleClearSearch = () => {
        setQuery('');
        searchInputRef.current.focus();
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    onChange={(event) => setQuery(event.target.value)}
                    value={query}
                    ref={searchInputRef}
                />
                <button type="submit">Search</button>
                <button type="button" onClick={handleClearSearch}>Clear</button>
            </form>

            {loading
                ? (<div>Loading results ...</div>)
                : (<ul>
                    {results.map(result => (
                        <li key={result.objectID}>
                            <a href={result.url}>{result.title}</a>
                        </li>
                    ))}
                </ul>)
            }

            {error && <div>{error.message}</div>}

        </>
    )
};
