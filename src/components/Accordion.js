/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => handleTitleClick(index)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderItems}
    </div>
  );
}

export default Accordion;
