import React, { useEffect, useState } from 'react';
import thoughts from '../../utils/thoughts.json';

const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  useEffect(() => {
    fetch('thoughts.json')
      .then((res) => res.json())
      .then((json) => setThoughts(json));
  }, []);
};

export default Thoughts;
