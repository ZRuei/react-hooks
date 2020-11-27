import React from 'react';

function Dropdown({ options, selected, onSelectedChange }) {
  const renderOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => { onSelectedChange(option); }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="colorOptions" className="label">
            選一個顏色
            <br />
            <div className="ui selection dropdown visible active">
              <i className="dropdown icon" />
              <div className="text">{selected.label}</div>
              <div className="menu visible transition">{renderOptions}</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
