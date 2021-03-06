import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from '../../utils/constants';

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
  Asterix,
  Required,
} from './FormsStyles';

export const HabitForm = () => {
  const accessToken = useSelector((store) => store.user.accessToken);

  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [regularityNumber, setRegularityNumber] = useState('');
  const [durationNumber, setDurationNumber] = useState('');
  const [regularity, setRegularity] = useState('');
  const [length, setLength] = useState('');


  const onHabitSubmit = (event) => {
    event.preventDefault();
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
        regularityNumber,
        durationNumber,
      }),
    };
    fetch(API_URL('habits'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.location.reload();
        }
      });
  };
  return (
    <FormWrapper onSubmit={onHabitSubmit}>
      <Label htmlFor='heading'>
        <Required>
          Heading<Asterix>*</Asterix>
        </Required>
        <Input
          type='text'
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        ></Input>
      </Label>
      <Label htmlFor='description'>
        <Required>
          Message<Asterix>*</Asterix>
        </Required>

        <Input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
      </Label>
      <Label>
        <Required>
          Regularity<Asterix>*</Asterix>
        </Required>
      </Label>

      <FormCategoryWrapper>
        <RegularityLabel htmlFor='once a day'>
          Daily
          <HiddenRadioButton
            type='radio'
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
        <CategoryLabel htmlFor='every other day'>
          Every other day
          <HiddenRadioButton
            type='radio'
            name='regularity'
            id='2'
            value='every other day'
            onChange={(e) => {
              setRegularity(e.target.value);
              setRegularityNumber(e.target.id);
            }}
          ></HiddenRadioButton>
          <RadioButton></RadioButton>
        </CategoryLabel>
        <CategoryLabel htmlFor='once a week'>
          Once a week
          <HiddenRadioButton
            type='radio'
            name='regularity'
            id='7'
            value='once a week'
            onChange={(e) => {
              setRegularity(e.target.value);
              setRegularityNumber(e.target.id);
            }}
          ></HiddenRadioButton>
          <RadioButton></RadioButton>
        </CategoryLabel>
      </FormCategoryWrapper>
      <Label>
        <Required>
          Length<Asterix>*</Asterix>
        </Required>
      </Label>
      <FormCategoryWrapper>
        <CategoryLabel htmlFor='30 days'>
          30 days
          <HiddenRadioButton
            type='radio'
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
      <Button type='submit'>Save</Button>
      <Label>
        <Required>
          <Asterix>*</Asterix>
          Required
        </Required>
      </Label>
    </FormWrapper>
  );
};
