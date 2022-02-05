import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  padding: 5% 10%;
  max-width: 1440px;
  background-color: var(--background);
`;

export const H1 = styled.h1`
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 300;
  max-width: 220px;
  margin: 0;
  color: var(--text-primary);
`;

export const Line = styled.div`
  margin-top: 1.3rem;
  height: 4px;
  width: 96px;
  background-color: (--text-primary);
`;

export const H2 = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  line-height: 3.3rem;
  margin-bottom: 0;
  max-width: 200px;
  margin-top: 1.5rem;
  color: var(--text-primary);
`;

export const HeroText = styled.div`
  max-width: 1440px;
  // margin: 0 auto;
  // padding-bottom: 1rem;
  color: var(--text-primary);
`;

export const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3rem;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 3rem;
`;

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1440px;
  gap: 1.5rem;
  margin: 0 auto;
`;

export const LogOutButton = styled.button`
  height: 48px;
  border-radius: 24px;
  padding: 0 2rem;
  color: var(--text-primary);
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 300;
  transition: 0.4s;
  border: none;
  max-width: 200px;
  background-color: var(--accent-green);
  :hover {
    background-color: #f1f1f1;
    color: var(--text-primary);
    cursor: pointer;
  }
`;
