import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { API_URL } from '../../utils/constants';

import user from '../../reducers/user';

import {
  HiddenRadioButton,
  RadioButton,
  CategoryLabel,
  FormCategoryWrapper,
  FormWrapper,
  Label,
  Input,
  Button,
  RegularityLabel,
} from './FormsStyles';

export const HabitForm = () => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
  const [regularity, setRegularity] = useState({
    onceAday: 'Once a day',
    everyOtherDay: 'Every other day',
    onceAweek: 'Once a week',
  });
  const [length, setLength] = useState({
    thirty: '30 days',
    ninety: '90 days',
    sixmonth: '6 months',
    year: '1 year',
  });

  const accessToken = useSelector((store) => store.user.accessToken);
  // const insideStore = useSelector((store) => store.habit);
  // console.log('inside store', insideStore);

  const dispatch = useDispatch();

  const onHabitSubmit = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({
        heading,
        description,
        regularity,
        length,
      }),
    };
    fetch(API_URL('habits'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            //dispatch(habit.actions.setItems(data.response.items));
            dispatch(user.actions.setUserId(data.response.userId));
          });
        }
      });
  };
  return (
    <FormWrapper onSubmit={onHabitSubmit}>
      <Label htmlFor='heading'>
        Heading
        <Input
          type='text'
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        ></Input>
      </Label>
      <Label htmlFor='description'>
        Message
        <Input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
      </Label>
      <Label>Regularity</Label>
      <FormCategoryWrapper>
        <RegularityLabel htmlFor='once a day'>
          Daily
          <HiddenRadioButton
            type='radio'
            name='options'
            id_='1'
            value='once a day'
            onChange={(e) => setRegularity(e.target.value)}
          ></HiddenRadioButton>
          <RadioButton></RadioButton>
        </RegularityLabel>
        <CategoryLabel htmlFor='every other day'>
          Every other day
          <HiddenRadioButton
            type='radio'
            name='options'
            id_='2'
            value='every other day'
            onChange={(e) => setRegularity(e.target.value)}
          ></HiddenRadioButton>
          <RadioButton></RadioButton>
        </CategoryLabel>
        <CategoryLabel htmlFor='once a week'>
          Once a week
          <HiddenRadioButton
            type='radio'
            name='options'
            id_='3'
            value='once a week'
            onChange={(e) => setRegularity(e.target.value)}
          ></HiddenRadioButton>
          <RadioButton></RadioButton>
        </CategoryLabel>
      </FormCategoryWrapper>

      <Label>Length of habit</Label>
      <FormCategoryWrapper>
        <CategoryLabel htmlFor='30 days'>
          30 days
          <HiddenRadioButton
            type='radio'
            name='options'
            id_='4'
            value='30 days'
            onChange={(e) => setLength(e.target.value)}
          ></HiddenRadioButton>
          <RadioButton></RadioButton>
        </CategoryLabel>
        <CategoryLabel htmlFor='90 days'>
          90 days
          <HiddenRadioButton
            type='radio'
            name='options'
            id_='5'
            value='90 days'
            onChange={(e) => setLength(e.target.value)}
          ></HiddenRadioButton>
          <RadioButton></RadioButton>
        </CategoryLabel>
        <CategoryLabel htmlFor='6 months'>
          6 months
          <HiddenRadioButton
            type='radio'
            name='options'
            id_='6'
            value='6 months'
            onChange={(e) => setLength(e.target.value)}
          ></HiddenRadioButton>
          <RadioButton></RadioButton>
        </CategoryLabel>
        <CategoryLabel htmlFor='1 year'>
          1 year
          <HiddenRadioButton
            type='radio'
            name='options'
            id_='7'
            value='1 year'
            onChange={(e) => setLength(e.target.value)}
          ></HiddenRadioButton>
          <RadioButton></RadioButton>
        </CategoryLabel>
      </FormCategoryWrapper>

      {/* <Label htmlFor='progress'>
        How many days
        <Input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
      </Label> */}
      <Button type='submit'>Save</Button>
    </FormWrapper>
  );
};

{
  /* <Label htmlFor='date'>
        Start date
        <input
          type='date'
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        ></input>
      </Label>
      <Label htmlFor='date'>
        End date
        <input
          type='date'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        ></input>
      </Label> */
}
