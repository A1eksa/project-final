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
  border-radius: 10px;
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
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: var(--accent-green);
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

export const HabitTracker = ({ durationNumber, regularityNumber, habitId }) => {
  const currentIncrement = useSelector((store) => store.habit.incrementNumber);
  const accessToken = useSelector((store) => store.user.accessToken);
  const habitItems = useSelector((store) => store.habit.items);
  const [progress, setProgress] = useState({ percentage: 0 });

  const dispatch = useDispatch();
  // console.log('items', items);
  console.log('durationNumber', durationNumber);
  console.log('regularityNumber', regularityNumber);
  console.log('habitId', habitId);

  // const durationNum = habitItems.durationNumber;
  // const regularityNum = habitItems.regularityNumber;
  // const incrementNum = habitItems.incrementNumber;

  // console.log(habitItems[0].durationNumber);

  // const Calculation = () => {
  //   return Math.round((regularityNumber / durationNumber) * 100);
  // };

  // const onIncrement = () => {
  //   const options = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: accessToken,
  //     },
  //     body: JSON.stringify({
  //       incrementNumber: currentIncrement + Calculation(),
  //       _id: habitId,
  //     }),
  //   };
  //   fetch(API_URL(`habits/${habitId}/update`), options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         batch(() => {
  //           // dispatch(habit.actions.setItems())
  //           dispatch(habit.actions.updateHabit(data.response));
  //           dispatch(habit.actions.setErrors(null));
  //         });
  //       } else {
  //         dispatch(habit.actions.setErrors(data.response));
  //       }
  //     });
  // };

  return (
    <Wrapper>
      <ProgressWrapper>
        <Track>{/* <Thumb percentage={progress.percentage}></Thumb> */}</Track>
      </ProgressWrapper>
      <Bottom>
        {/* <TrackText>{progress.percentage}%</TrackText> */}
        {/* <TrackText>{habitItems.incrementNumber}%</TrackText> */}

        <IconContext.Provider
          value={{
            color: '#444444',
            className: 'global-class-name',
            size: '1rem',
            style: { verticalAlign: 'middle', marginBottom: '0.1rem' },
          }}
        >
          <AddButton
          // onClick={
          //   (event) => Calculation({ percentage: progress.percentage + 10 })
          // setProgress({
          //   percentage: progress.percentage + `${increment}`,
          // })
          // }
          >
            <FaCheck />
          </AddButton>
          {/* <AddButton onClick={() => onIncrement()}></AddButton> */}
        </IconContext.Provider>
      </Bottom>
    </Wrapper>
  );
};
