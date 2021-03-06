import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  box-sizing: border-box;

@media (max-width: 767px) {
  box-shadow: var(--box-shadow);
  background-color: var(--level-one);
  border-radius: 10px;
  padding 1rem;
  min-width: 100vw;
}
`;

// CITY //  

export const City = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin: 0.3rem 0 0 0;
  color: var(--text-secondary);
`;

// DATE DAY MONTH //

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;

export const DateNumber = styled.h3`
  font-size: 5rem;
  line-height: 3rem;
  font-weight: 100;
  color: var(--text-primary);
  font-feature-settings: 'lnum' 1;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 4rem;
    line-height: 2rem;
  }
`;

export const DayMonth = styled.div`
  margin-left: 0.5rem;

  @media (max-width: 767px) {
  }
`;

export const Day = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-weight: 200;
  margin: 0;
  color: var(--text-secondary);
`;

export const Month = styled.p`
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 200;
  margin: 0.2rem 0 0 0;
  color: var(--text-secondary);

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const TempAndWeather = styled.div`
  display: flex;
  // flex-direction: row;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 767px) {
    align-items: right:
  }
`;

export const Temp = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  margin: 0.5px 0;
  color: var(--text-secondary);

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const Icon = styled.img`
  margin-left: 0;
`;

export const Desc = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  margin: 0;
  color: var(--text-secondary);

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const DescTemp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
