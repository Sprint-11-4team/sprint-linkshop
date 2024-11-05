import { useEffect, useRef, useCallback } from 'react';

import LoadingSpinner from '../common/LoadingSpinner';

// Loader 컴포넌트

const InfiniteScrollList = ({ onLoadMore, loading }) => {
  const observerRef = useRef();

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        onLoadMore();
      }
    },
    [loading, onLoadMore],
  );

  useEffect(() => {
    const option = { threshold: 0.5 };
    const observer = new IntersectionObserver(handleObserver, option);

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div>
      {loading && <LoadingSpinner />}
      <div ref={observerRef} style={{ height: '1px' }} />
    </div>
  );
};

export default InfiniteScrollList;
