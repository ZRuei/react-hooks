import React from 'react';

function Dropdown({ options }) {
  const renderOptions = options.map((option) => (
    <div key={option.value} className="item">
      {option.label}
    </div>
  ));

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="colorOptions" className="label">
            選一個顏色
            <br />
            <div className="ui selection dropdown visible active">
              <i className="dropdown icon" />
              <div className="text">顏色會顯示在這邊</div>
              <div className="menu visible transition">{renderOptions}</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
