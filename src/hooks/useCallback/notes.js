// 1 - useCallback hook returns memoized version of the callback function that changes if one of the dependencies has changed.

// 2 - signature
/*
================================================
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
=================================================
*/

// 3 - useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
