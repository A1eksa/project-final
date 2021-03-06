import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { API_URL } from '../../utils/constants';

import editModal from '../../reducers/editModal';
import habit from '../../reducers/habit';

import {
  FormWrapper,
  Label,
  Input,
  Button,
  H3,
  Preamble,
  FormCategoryWrapper,
  RegularityLabel,
  RadioButton,
  CategoryLabel,
  HiddenRadioButton,
} from './FormsStyles';

export const HabitEditForm = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const selectedHabit = useSelector((store) => store.editModal.selectedHabit);
  const selectedHeading = useSelector(
    (store) => store.editModal?.selectedHabit?.heading
  );
  const selectedDescription = useSelector(
    (store) => {
    return  store.editModal?.selectedHabit?.description
    }
  );
  const selectedRegularity = useSelector(
    (store) => store.editModal?.selectedHabit?.regularity
  );
  const selectedLength = useSelector(
    (store) => store.editModal?.selectedHabit?.length
  );
  const selectedDurationNumber = useSelector(
    (store) => store.editModal?.selectedHabit?.durationNumber
  );
  const selectedRegularityNumber = useSelector(
    (store) => store.editModal?.selectedHabit?.regularityNumber
  );
  const selectedIncrementNumber = useSelector(
    (store) => store.editModal?.selectedHabit?.incrementNumber
  );

  const [regularity, setRegularity] = useState(selectedRegularity);
  const [length, setLength] = useState(selectedLength);
  const [heading, setHeading] = useState(selectedHeading);
  const [description, setDescription] = useState(selectedDescription);
  const [regularityNumber, setRegularityNumber] = useState(
    selectedRegularityNumber
  );
  const [durationNumber, setDurationNumber] = useState(selectedDurationNumber);

  const dispatch = useDispatch();

  const updateHabit = (event, habitId) => {
    event.preventDefault();
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({
        _id: habitId,
        heading,
        description,
        regularity,
        length,
        regularityNumber,
        durationNumber,
        incrementNumber: selectedIncrementNumber
      }),
    };

    fetch(API_URL(`habits/${habitId}/update`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(habit.actions.updateHabit(data.response));
            dispatch(editModal.actions.setEditSlideout(false));
          });
        } else {
          dispatch(editModal.actions.setErrors(data.response));
        }
      });
  };

  return (
    <>
      <H3>Edit your habit</H3>
      <Preamble>You are doing great! What do you wanna update?</Preamble>

      <FormWrapper onSubmit={(event) => updateHabit(event, selectedHabit._id)}>
        <Label htmlFor='heading'>
          Heading
          <Input
            type='text'
            defaultValue={selectedHeading}
            onChange={(e) => setHeading(e.target.value)}
          ></Input>
        </Label>

        <Label htmlFor='description'>
          Message
          <Input
            type='text'
            defaultValue={selectedDescription}
            onChange={(e) => setDescription(e.target.value)}
          ></Input>
        </Label>

        <Label>Regularity</Label>
        <FormCategoryWrapper>
          <RegularityLabel htmlFor='once a day'>
            Daily
            <HiddenRadioButton
              type='radio'
              checked={regularity === 'once a day'}
              name='regularity'
              id='1'
              value='once a day'
              onChange={(e) => {
                setRegularity(e.target.value);
                setRegularityNumber(e.target.id);
              }}
            ></HiddenRadioButton>
            <RadioButton></RadioButton>
          </RegularityLabel>

          <RegularityLabel htmlFor='every other day'>
            Every other day
            <HiddenRadioButton
              type='radio'
              checked={regularity === 'every other day'}
              name='regularity'
              id='2'
              value='every other day'
              onChange={(e) => {
                setRegularity(e.target.value);
                setRegularityNumber(e.target.id);
              }}
            ></HiddenRadioButton>
            <RadioButton></RadioButton>
          </RegularityLabel>

          <RegularityLabel htmlFor='once a week'>
            Once a week
            <HiddenRadioButton
              type='radio'
              checked={regularity === 'once a week'}
              name='regularity'
              id='7'
              value='once a week'
              onChange={(e) => {
                setRegularity(e.target.value);
                setRegularityNumber(e.target.id);
              }}
            ></HiddenRadioButton>
            <RadioButton></RadioButton>
          </RegularityLabel>
        </FormCategoryWrapper>

        <Label>Length of habit</Label>
        <FormCategoryWrapper>
          <CategoryLabel htmlFor='30 days'>
            30 days
            <HiddenRadioButton
              type='radio'
              checked={length === '30 days'}
              name='options'
              id='30'
              value='30 days'
              onChange={(e) => {
                setLength(e.target.value);
                setDurationNumber(e.target.id);
              }}
            ></HiddenRadioButton>
            <RadioButton></RadioButton>
          </CategoryLabel>
          <CategoryLabel htmlFor='90 days'>
            90 days
            <HiddenRadioButton
              type='radio'
              checked={length === '90 days'}
              name='options'
              id='90'
              value='90 days'
              onChange={(e) => {
                setLength(e.target.value);
                setDurationNumber(e.target.id);
              }}
            ></HiddenRadioButton>
            <RadioButton></RadioButton>
          </CategoryLabel>

          <CategoryLabel htmlFor='6 months'>
            6 months
            <HiddenRadioButton
              type='radio'
              checked={length === '6 months'}
              name='options'
              id='182'
              value='6 months'
              onChange={(e) => {
                setLength(e.target.value);
                setDurationNumber(e.target.id);
              }}
            ></HiddenRadioButton>
            <RadioButton></RadioButton>
          </CategoryLabel>

          <CategoryLabel htmlFor='1 year'>
            1 year
            <HiddenRadioButton
              type='radio'
              checked={length === '1 year'}
              name='options'
              id='365'
              value='1 year'
              onChange={(e) => {
                setLength(e.target.value);
                setDurationNumber(e.target.id);
              }}
            ></HiddenRadioButton>
            <RadioButton></RadioButton>
          </CategoryLabel>
        </FormCategoryWrapper>
        <Button type='submit'>Update you habit</Button>
      </FormWrapper>
    </>
  );
};
