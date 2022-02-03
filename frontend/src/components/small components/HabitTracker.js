import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
// import { API_URL } from '../../utils/constants'
import styled from 'styled-components';
import { IconContext } from 'react-icons';
// import { FaCheck } from 'react-icons/fa';
import { FaHandPeace } from 'react-icons/fa';
// import habit from '../../reducers/habit';

const ProgressWrapper = styled.div`
  // transform: rotate(-90deg);
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const Track = styled.div`
  width: 150px;
  height: 20px;
  background-color: #dedede;
  border-radius: 10px;
  box-shadow: inset 0 0 5 #000;
  // margin-bottom: 1rem;
`;

const TrackText = styled.p`
  font-size: 1rem;
  line-height: 1rem;
  margin: 0;
`;

const Thumb = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: #6bccf9;
  border-radius: 10px;
  border-radius: 10px;
`;

export const AddButton = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: var(--accent-green);
  color: #444444;
  font-size: 2.5rem;
  line-height: 1rem;
  font-family: Raleway;
  font-weight: 600;
  border: none;
  transition: 0.3s;
  //   margin-bottom: 1rem;
  :hover {
    background-color: #f1f1f1;
    color: var(--text-primary);
    cursor: pointer;
    transform: rotate(360deg);
  }
`;

export const HabitTracker = () => {
  //   const habitItems = useSelector((store) => store.habit.items);
  //   const accessToken = useSelector((store) => store.user.accessToken);

  const [progress, setProgress] = useState({ percentage: 20 });

  return (
    <ProgressWrapper>
      <Track>
        <Thumb percentage={progress.percentage}></Thumb>
      </Track>
      <TrackText>{progress.percentage}%</TrackText>
      <IconContext.Provider
        value={{
          color: '#444444',
          className: 'global-class-name',
          size: '1rem',
          style: { verticalAlign: 'middle', marginBottom: '0.1rem' },
        }}
      >
        <AddButton
          onClick={(event) =>
            setProgress({ percentage: progress.percentage + 10 })
          }
        >
          <FaHandPeace />
        </AddButton>
        {/* <AddButton onClick={() => setProgress({ percentage: progress.percentage - 10})}></AddButton> */}
      </IconContext.Provider>
    </ProgressWrapper>
  );
};