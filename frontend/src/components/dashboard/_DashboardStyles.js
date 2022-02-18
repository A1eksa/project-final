import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  padding: 5% 10%;
  max-width: 1440px;
  background-color: var(--background);
  height: 100vh;
  z-index: 1;

  @media (max-width: 767px) {
    padding: 1rem;
    height: 100%;
    width: 100%;
  }
`;

export const H1 = styled.h1`
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 300;
  min-width: 220px;
  margin: 0;
  color: var(--text-primary);
`;

export const Line = styled.div`
  margin-top: 1.3rem;
  height: 4px;
  width: 96px;
  background-color: var(--text-primary);
`;

export const H2 = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  line-height: 3.3rem;
  margin-bottom: 0;
  width: 200px;
  margin-top: 1.5rem;
  color: var(--text-primary);

  @media (max-width: 767px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

export const HeroText = styled.div`
  // max-width: 1440px;
  // color: var(--text-primary);

  @media (max-width: 767px) {
    padding-top: 5rem;
  }
`;

export const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0 3rem;

  @media (max-width: 1180px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem 0;
  }

  @media (max-width: 960px) {
    padding: 1rem 0;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 4rem;

  @media (max-width: 1180px) {
    margin-top: 2rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    align-items: flex-start;
    margin-top: 1.5rem;
  }
`;

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // max-width: 1440px;
  gap: 2rem;
  // margin: 0 auto;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
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
