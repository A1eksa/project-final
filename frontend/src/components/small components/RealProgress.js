import React, { useState } from 'react';
import styled from 'styled-components';

const ParentProgress = styled.div`
    max-width: 200px;
    height: 100px;
    transform: rotate(270deg);
    background-color: var(--accent-green);
    border-radius:  8px 0 0 8px;
    margin: auto;
    margin-bottom: 32px,
    margin-top: 32px;
    margin-bottom: 1rem;
`;

const ChildProgress = styled.div`
  height: 100%;
  //   width: 40px;
  background-color: pink;
`;

export const RealProgress = ({ done }) => {
  const [style, setStyle] = useState({});
  const [counter, setCounter] = useState(1);
  // const incrementCounter = () => setCounter(counter + 1);

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <>
      <ParentProgress>
        <ChildProgress className='progress-done' style={style}>
          {done}%
        </ChildProgress>
      </ParentProgress>
      {/* <button onClick={incrementCounter}>INCREASE</button> */}
    </>
  );
};
