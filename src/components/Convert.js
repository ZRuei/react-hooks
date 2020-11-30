import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Convert({ language, text }) {
  const [translatedText, setTranslatedText] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerID = setTimeout(() => {
      if (text) {
        setDebouncedText(text);
      }
    }, 500);
    return () => {
      clearTimeout(timerID);
    };
  }, [text]);

  useEffect(() => {
    const callTranslateApi = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        });
      setTranslatedText(data.data.translations[0].translatedText);
    };
    callTranslateApi();
  }, [language, debouncedText]);

  return (
    <h1 className="ui header">
      {translatedText}
    </h1>
  );
}
