import React from 'react';
import { AiOutlineRotateLeft } from 'react-icons/ai';
import styled from 'styled-components';

const ParentProgress = styled.div`
    max-width: 200px;
    height: 100px;
    transform: rotate(270deg);
    background-color: var(--accent-green);
    border-radius:  8px 0 0 8px;
    margin: auto;
    margin-bottom: 32px,
    margin-top: 32px;
`;

const ChildProgress = styled.div`
  height: 100%;
  width: 40px;
  background-color: pink;
`;

const ProgressBar = ({ progress }) => {
  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    // width: `30%`,
    backgroundColor: '#50b282',
    borderRadius: 40,
  };

  const progresstext = {
    padding: 16,
    color: '#333',
    fontWeight: 600,
    fontSize: 14,
  };

  return (
    <div className='progress-bar'>
      <ParentProgress>
        <ChildProgress>
          <span style={progresstext}>{`${progress}%`}</span>
        </ChildProgress>
      </ParentProgress>
    </div>
  );
};

export default ProgressBar;
