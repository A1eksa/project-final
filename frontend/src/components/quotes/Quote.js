import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    fetch('http://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      {/* {quoteItems.map((items) => (
        <>
          <h2>{quote.text}</h2>
          <h3>{quote.author}</h3>
        </>
      ))} */}
    </div>
  );
};

export default Quote;
// setQuote(data)

// https://zenquotes.io/api/today
// http://api.quotable.io/random /// ok api
// https://api.paperquotes.com/apiv1/quotes/
