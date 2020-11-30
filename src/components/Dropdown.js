import React, { useState, useEffect, useRef } from 'react';

function Dropdown(
  {
    label, options, selected, onSelectedChange,
  },
) {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleBodyClick(e) {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      setOpenMenu(false);
    }

    document.body.addEventListener('click', handleBodyClick, true);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
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
          {label}
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
