import styled from 'styled-components';

export const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const HabitWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-primary);

  @media (max-width: 767px) {
    font-size: 1.125rem;
  }
`;

export const ListWrapperEmpty = styled.section`
  width: 100%;
`;

export const CardWrapper = styled.div`
  min-height: 148px;
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  padding 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  background-color: var(--habit-card);
  z-index: 1;
`;

export const RegularityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const RegularityText = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  margin: 0;
  border-radius: 12px;
  color: var(--text-primary);
`;

export const HabitSubject = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 0.5rem;
`;

export const HabitText = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: var(--text-primary);
  padding-bottom: 1rem;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  transition: 0.4s;
  border: none;
  max-width: 200px;
  background-color: var(--accent-green);
  :hover {
    background-color: var(--grey-300);
    cursor: pointer;
    transform: rotate(360deg);
    cursor: pointer;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding-top: 1rem;
  max-width: 80%;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.p`
  font-size: 14px;
  color: var(--text-primary);
  margin: 0;
`;

export const Value = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary);
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--habit-line);
  padding-bottom: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
`;

export const CardDivider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Subject = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  margin-right: 0.5rem;
  transition: 0.4s;
  border: none;
  max-width: 200px;
  background-color: var(--accent-yellow);
  :hover {
    background-color: var(--grey-300);
    cursor: pointer;
    transform: rotate(360deg);
    cursor: pointer;
  }
`;

export const StyledDeleteIcon = styled.img`
  height: 14px;
  width: 14px;
`

export const StyledEditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  margin-right: 0.5rem;
  transition: 0.4s;
  border: none;
  max-width: 200px;
  background-color: var(--accent-green);
  :hover {
    background-color: var(--grey-300);
    cursor: pointer;
    transform: rotate(360deg);
    cursor: pointer;
  }
`;

export const StyledEditIcon = styled.img`
  height: 18px;
  width: 18px;
`
