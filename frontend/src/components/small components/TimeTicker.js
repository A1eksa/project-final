import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


export const TimeTicker = () => {
  const [timeState, setTimeState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTimeState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <TimeWrapper>
      <Label>Your local time is</Label>
      <H4>{timeState}</H4>
    </TimeWrapper>
  );
};

// S T Y L I N G //

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 56px;
  border-right: 2px solid var(--text-primary);
  padding-right: 2rem;

  @media (max-width: 767px) {
    justify-content: center;
  }
}
`;

export const H4 = styled.h4`
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 200;
  margin: 0;
  color: var(--text-primary);
  font-family: oxygen mono;

  @media (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0 0 0.2rem 0;
  text-align: right;
  font-family: oxygen mono;

  @media (max-width: 767px) {
    text-align: left;
  }
`;
