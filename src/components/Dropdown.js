import React, { useState, useEffect, useRef } from 'react';

function Dropdown({ options, selected, onSelectedChange }) {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      setOpenMenu(false);
    }, true);
  }, []);

  const renderOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="colorOptions" className="label">
          選一個顏色
          <br />
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className={`ui selection dropdown ${openMenu ? 'visible active' : ''}`}
          >
            <i className="dropdown icon" />
            <div className="text">{selected.label}</div>
            <div className={`menu ${openMenu ? 'visible transition' : ''}`}>
              {renderOptions}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Dropdown;
