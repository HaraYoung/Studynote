import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from './slices/Covid19Slice';

const Test = memo(() => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.covid19);

  React.useEffect(() => {
    dispatch(
        getList({
        date_gte: '2020-02-17T00:00:00Z',
        date_lte: '2022-05-31T00:00:00Z',
      })
    );
  }, [dispatch]);

  return loading ? (
    'loading...'
  ) : error ? (
    JSON.stringify(error)
  ) : (
    <>
      <h1>Data</h1>
      {JSON.stringify(data)}
    </>
  );
});

export default Test;
