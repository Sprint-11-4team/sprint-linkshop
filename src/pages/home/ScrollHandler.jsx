import { useEffect, useCallback } from 'react';

const ScrollHandler = ({ setPage }) => {
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 200
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [setPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return null;
};

export default ScrollHandler;
