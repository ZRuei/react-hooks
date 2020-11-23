import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const callWikiApi = async () => {
      await axios.get('https://zh.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
          utf8: '',
        },
      });
    };
    if (term) {
      callWikiApi();
    }
  }, [term]);

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
    </div>
  );
}

export default Search;
