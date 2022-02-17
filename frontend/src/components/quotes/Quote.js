import React, { useState, useEffect } from 'react';
import { API_URL } from '../../utils/constants';
import reload from '../../utils/reload.svg';

import { QuoteWrapper, Name, QuoteText, StyledReloadButton, StyledReloadIcon, Left } from './_QuotesStyles';

export const Quote = () => {
  const [theQuote, setTheQuote] = useState({});

  const getNewQuote = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch(API_URL('quotes'))
      .then((res) => res.json())
      .then((data) => {
        setTheQuote(data.response);
        console.log('Is this the quote', data);
      });
  }, []);

  return (
    <QuoteWrapper>
      <Left>
        <QuoteText>{theQuote.message}</QuoteText>
        <Name>/ {theQuote.author}</Name>
      </Left>
      <StyledReloadButton onClick={() => getNewQuote()}>
          <StyledReloadIcon src={reload}></StyledReloadIcon>
      </StyledReloadButton>
    </QuoteWrapper>
  );
};
