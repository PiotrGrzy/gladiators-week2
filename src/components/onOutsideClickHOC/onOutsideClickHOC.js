// Stwórz HOCa outsideClickHOC, który bedzie działać np z customowymi
// componentami typu dropdown lub select:
import React, { useState } from 'react';
import 'styles.css';

const outsideClickHOC = (Component) => (props) => {
  const [waitingOnClick, setWaitingOnClick] = useState(false);
  const [styles, setStyles] = useState({
    display: 'none',
  });

  const OpenComponent = () => {
    setStyles({ display: 'block' });
  };

  const CloseComponent = () => {};

  return (
    <div>
      <div>Backdrop</div>
      <div>{<Component />}</div>
    </div>
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
