/* eslint-disable react/prop-types */
import React from 'react';

function Accordion({ items }) {
  const renderItems = items.map((item) => (
    <React.Fragment key={item.title}>
      <div className="title active">
        <i className="dropdown icon" />
        {item.title}
      </div>
      <div className="content active">
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  ));
  return (
    <div className="ui styled accordion">
      {renderItems}
    </div>
  );
}

export default Accordion;
