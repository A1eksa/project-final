import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import styled from 'styled-components';
import check from '../../utils/check.svg';

import { API_URL } from '../../utils/constants';

// import Lottie from 'react-lottie';
// import animationData from './lotties/loader';

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
  width: 72px;
  text-align: right;
`;

const Thumb = styled.div`
  width: ${(props) => (props.percentage <= 100 ? props.percentage : 100)}%;
  height: 100%;
  background-color: var(--accent-green);
  border-radius: 0 10px 10px 0;
`;

export const AddButton = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: var(--accent-green);
  color: #444444;
  border: none;
  transition: 0.3s;
  :hover {
    background-color: var(--grey-300);
    color: var(--text-primary);
    cursor: pointer;
    transform: rotate(360deg);
  }
`;


export const EditButton = styled.button`
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
    // color: var(--text-primary);
    cursor: pointer;
    transform: rotate(360deg);
    cursor: pointer;
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

export const StyledCheckIcon = styled.img`
  margin-top: 0.2rem;
  height: 16px;
  width: 16px;
`

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

  const dispatch = useDispatch();

  const calculationNumber = regularityNumber / durationNumber;
  console.log('calcu', calculationNumber);
  console.log('regu', regularityNumber);
  console.log('dur', durationNumber);

  const onIncrement = () => {
    console.log('onIncrement');
    setProgress((progress) => {
      if (progress * calculationNumber * 100 < 100) {
        return progress + 1;
      } else {
        return progress;
      }
    });
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({
        // incrementNumber:
        //   (incrementNumber * calculationNumber * 100) <= 100
        //     ? progress
        //     : incrementNumber,
        incrementNumber: progress,
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
            dispatch(habit.actions.updateHabit(data.response));
            dispatch(habit.actions.setErrors(null));
          });
        } else {
          dispatch(habit.actions.setErrors(data.response));
        }
      });
  };

  console.log('progress', progress);
  console.log('increment', incrementNumber);

  return (
    <Wrapper>
      <ProgressWrapper>
        <Track>
          <Thumb
            percentage={Math.round(progress * calculationNumber * 100)}
          ></Thumb>
        </Track>
      </ProgressWrapper>
      <Bottom>
        <TrackText>{Math.round(progress * calculationNumber * 100)}%</TrackText>

          <AddButton onClick={() => onIncrement()}>
              <StyledCheckIcon src={check}></StyledCheckIcon>
          </AddButton>
      </Bottom>
    </Wrapper>
  );
};
