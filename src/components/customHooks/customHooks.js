import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

// ten hook łączy niektóre akcje z danego reducera, tak aby dało się je wywołać w danym komponencie
// poznaj jak to działa - https://github.com/Przemocny/zbior-zadan-html-css-js-react/tree/master/FREE%20CODE/REDUX

const useSomeActions = (actionsAsArray) => {
  const dispatch = useDispatch();
  return useMemo(
    () => actionsAsArray.map((action) => bindActionCreators(action, dispatch)),
    [dispatch]
  );
};

// przetestuj
// - czy po użyciu hooka oraz dowolnej akcji w komponencie store zostanie zmieniowy wg użytej akcji
