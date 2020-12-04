import React from 'react';

export default function Link({ href, className, children }) {
  function handleClick(e) {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <a
      onClick={handleClick}
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}
