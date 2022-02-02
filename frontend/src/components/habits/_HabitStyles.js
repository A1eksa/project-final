import styled from 'styled-components';

export const HabitWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-primary);
`;

export const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(343px, 1fr));
  grid-gap: 1rem;
`;

export const CardWrapper = styled.div`
min-height: 148px;
box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
border-radius: 10px;
padding 1rem;
box-sizing: border-box;
margin-bottom: 1rem;
`;

export const HabitSubject = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
`;

export const HabitText = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: var(--text-primary);
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  color: var(--text-primary);
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 300;
  margin-right: 0.5rem;
  transition: 0.4s;
  border: none;
  max-width: 200px;
  background-color: var(--accent-yellow);
  :hover {
    background-color: #f1f1f1;
    color: var(--text-primary);
    cursor: pointer;
  }
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  color: var(--text-primary);
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 300;
  margin-right: 0.5rem;
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

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
