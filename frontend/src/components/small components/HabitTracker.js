import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';
import { API_URL } from '../../utils/constants';
import habit from '../../reducers/habit';

const ProgressWrapper = styled.div`
  transform: rotate(-90deg);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Track = styled.div`
  width: 120px;
  height: 64px;
  background-color: var(--progress-background);
  border-radius: 0 10px 10px 0;
  box-shadow: inset 0 0 5 #000;
  margin-left: -5rem;
`;

const TrackText = styled.p`
  font-size: 2rem;
  line-height: 1rem;
  font-weight: 200;
  margin: 0;
  color: var(--text-primary);
`;

const Thumb = styled.div`
  width: ${(props) => (props.percentage <= 100 ? props.percentage : 100)}%;
  height: 100%;
  background-color: var(--accent-green);
  border-radius: 0 10px 10px 0;
  // border-radius: 10px;
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
    background-color: var(--grey-300);
    color: var(--text-primary);
    cursor: pointer;
    transform: rotate(360deg);
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  bottom: 0;
`;

export const HabitTracker = ({
  heading,
  description,
  length,
  regularity,
  durationNumber,
  regularityNumber,
  incrementNumber,
  habitId,
}) => {
  const accessToken = useSelector((store) => store.user.accessToken);

  const [progress, setProgress] = useState(incrementNumber);
  const [progressValue, setProgressValue] = useState({ incrementNumber });

  const dispatch = useDispatch();

  // const Calculation = () => {
  //   return Math.round((regularityNumber / durationNumber) * 100);
  // };

  const calculationNumber = Math.round(
    (regularityNumber / durationNumber) * 100
  );

  //return Math.round((regularityNumber / durationNumber) * 100);

  //return Math.round((incrementNumber + 1 / durationNumber) * 100);

  const onIncrement = () => {
    console.log('onIncrement');
    setProgress(incrementNumber + 1);
    setProgressValue(incrementNumber);
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({
        incrementNumber:
          incrementNumber + calculationNumber <= 100
            ? incrementNumber + calculationNumber
            : 100,
        heading,
        description,
        regularityNumber,
        durationNumber,
        length,
        regularity,
        _id: habitId,
      }),
    };
    fetch(API_URL(`habits/${habitId}/update`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            // dispatch(habit.actions.setItems())
            dispatch(habit.actions.updateHabit(data.response));
            dispatch(habit.actions.setErrors(null));
          });
        } else {
          dispatch(habit.actions.setErrors(data.response));
        }
      });
  };

  console.log('progress', progress);

  return (
    <Wrapper>
      <ProgressWrapper>
        <Track>
          {/* //progressbar needs to stop at 100%// */}
          {/* //progressbar needs to stay at state when reload// */}
          <Thumb percentage={progress}></Thumb>
        </Track>
      </ProgressWrapper>
      <Bottom>
        {/* // set state to 0 from start  with proggressValue// */}
        {/* <TrackText>{incrementNumber + calculationNumber}%</TrackText> */}
        <TrackText>{incrementNumber}%</TrackText>

        <IconContext.Provider
          value={{
            color: '#444444',
            className: 'global-class-name',
            size: '1rem',
            style: { verticalAlign: 'middle', marginBottom: '0.1rem' },
          }}
        >
          <AddButton onClick={() => onIncrement()}>
            <FaCheck />
          </AddButton>
        </IconContext.Provider>
      </Bottom>
    </Wrapper>
  );
};
