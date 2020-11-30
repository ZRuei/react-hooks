import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Chinese (Traditional)',
    value: 'zh-TW',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'Albanian',
    value: 'sq',
  },
];

export default function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="inputText">
            輸入一些東西看看
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>

        </div>
      </div>
      <Dropdown
        label="選擇要翻譯成什麼語言"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
    </div>
  );
}
