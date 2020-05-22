// Stwórz HOCa outsideClickHOC, który bedzie działać np z customowymi
// componentami typu dropdown lub select:
import React, { useEffect, useState, useRef } from 'react';
import './styles.css';

const outsideClickHOC = (Component) => (props) => {
  const [waitingOnClickOutside, setWaitingOnClickOutside] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('click', clickListener);
    return () => {
      document.removeEventListener('click', clickListener);
    };
  }, []);

  const clickListener = (e) => {
    if (!ref.current.contains(e.target)) {
      setWaitingOnClickOutside(false);
    }
  };

  const onStartListeningClickOutside = (e) => {
    setWaitingOnClickOutside(true);
  };

  return (
    <>
      <div
        id="backdrop"
        onClick={clickListener}
        className={waitingOnClickOutside ? 'backDrop-on' : 'backDrop-off'}
      ></div>
      <div
        className={
          waitingOnClickOutside ? 'container withBackDrop' : 'container'
        }
        ref={ref}
        onClick={onStartListeningClickOutside}
      >
        {<Component {...props} />}
      </div>
    </>
  );
};

// który będzie działać wg poniższych wytycznych:
// - będzie do owrapowanego komponentu dodawać propsy oraz działanie:

// działanie 1:
// -- prop - onStartListeningClickOutside
// --- jeśli ta funkcja zostanie wywołana dany komponent zyskuje z-index najwyższy na stronie
// --- pod komponentem pojawia się półprzeźroczyste ciemne tło, w które można kliknąć zamykając komponent

// działanie 2:
// -- prop - waitingOnClickOutside
// --- zwraca true/false jeśli została wywołana metoda onStartListeningClickOutside

// działanie 3:
// -- prop onClickOutside
// --- jesli ta funkcja zostanie wywołana komponent wraca na swoje miejsce z odpowiednim z-index
// --- znika półprzeźroczyste szare tło spod komponentu

export default outsideClickHOC;
