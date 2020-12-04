import { useState, useEffect } from 'react';

export default function Route({ path, children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    function handleLocationChange() {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
}
