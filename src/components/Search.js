import React, { useState } from 'react';

function Search() {
  const [term, setTerm] = useState('');

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
