import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
// import { API_URL } from '../../utils/constants'
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';
// import { FaHandPeace } from 'react-icons/fa';

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
  background-color: #dedede;
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
    background-color: #f1f1f1;
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

export const HabitTracker = () => {
  const habitItems = useSelector((store) => store.habit.items);
  const [progress, setProgress] = useState({ percentage: 0 });

  const length = habitItems.length;
  const lengthNumber = 30;
  const regularity = habitItems.regularity;
  const regularityNumber = 2;
  // console.log('length', habitItems[0].length);
  // console.log('regularity', habitItems[0].regularity);
  console.log(lengthNumber);
  console.log(regularityNumber);
  console.log(habitItems);

  var numberOfOccasions = lengthNumber / regularityNumber;
  console.log('numberofoccations', numberOfOccasions);

  var occasions = Math.round((numberOfOccasions * 100) / 100);
  console.log('occasions', occasions);
  var increment = Math.round(100 / occasions);
  console.log('increment', increment);
  // console.log('increment', increment2);
  // console.log('duration', duration);

  // const startDate = new Date('22/02/01');
  // const endDate = new Date('22/02/12');

  // const startDate = new Date(habitItems.startDate);
  // const endDate = new Date(habitItems.endDate);

  // console.log('start date', startDate);
  // const diffDays = Math.ceil(
  //   Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  // );
  // console.log('amount of days in period', diffDays);

  //const regularity = habitItems.regularity;  1 är varje dag, 2 är varannan och 7 är varje vecka

  // var numberOfOccasions = diffDays / regularity;
  // var occasions = Math.round((numberOfOccasions * 100) / 100);
  // var increment = Math.round(100 / occasions);

  // console.log('increment', increment);
  // console.log('occasions', occasions);
  // console.log('habitItems.endDate', habitItems.startDate);

  // console.log(
  //   'number of occations this task should be done: ',
  //   Math.round((2.67 * 100) / 100)
  // );

  // console.log(
  //   'number of occations this task should be done: ',
  //   Math.round((numberOfOccasions * 100) / 100)
  // );

  // console.log('number of occations whitout decimal: ', occasions);

  return (
    <Wrapper>
      <ProgressWrapper>
        <Track>
          <Thumb percentage={progress.percentage}></Thumb>
        </Track>
      </ProgressWrapper>
      <Bottom>
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
            onClick={
              (event) => setProgress({ percentage: progress.percentage + 10 })
              // setProgress({
              //   percentage: progress.percentage + `${increment}`,
              // })
            }
          >
            <FaCheck />
          </AddButton>
          {/* <AddButton onClick={() => setProgress({ percentage: progress.percentage - 10})}></AddButton> */}
        </IconContext.Provider>
      </Bottom>
    </Wrapper>
  );
};
