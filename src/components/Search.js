import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [term, setTerm] = useState('React');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerID = setTimeout(() => {
      if (term) {
        setDebouncedTerm(term);
      }
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [term]);

  useEffect(() => {
    const callWikiApi = async () => {
      const { data } = await axios.get('https://zh.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };

    callWikiApi();
  }, [debouncedTerm]);

  const renderResults = results.map((result) => (
    <div key={result.pageid} className="item">
      <div className="content">
        <div className="header">
          <a
            href={`https://zh.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            {result.title}
          </a>
        </div>
        {result.snippet}
      </div>
    </div>
  ));
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="termInput">
            請輸入關鍵字
            <input
              type="text"
              id="termInput"
              className="input"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="ui celled list">
        {renderResults}
      </div>
    </div>
  );
}

export default Search;
