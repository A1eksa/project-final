import styled from 'styled-components';

export const WeatherWrapper = styled.div`
// margin-left: 220px;
min-width: 343px;
max-width: 50%;
box-shadow: var(--box-shadow);
border-radius: 10px;
padding 1rem;
box-sizing: border-box;
margin-bottom: 1rem;`;

export const DateNumber = styled.h3`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 2.5rem;
`;
export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;
export const DayMonth = styled.div`
  margin: 0;
  margin-left: 0.5rem;
`;

export const Day = styled.p`
  font-size: 1rem;
  margin: 0;
  line-height: 1rem;
`;
