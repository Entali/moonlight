import React from 'react'

const LogoView = () => {
  return (
      <h1 style={{
        marginBottom: '40px',
        letterSpacing: '1px'
      }}>
        <span style={{
          fontSize: '0.7em',
          fontWeight: 'lighter'
        }}>M</span>
        <small style={{
          position: 'relative',
          left: '2px',
          bottom: '-1px',
          display: 'inline-block',
          transform: 'rotate(-180deg)',
          fontSize: '0.7em'

        }}>&#9789;</small>
        <small style={{
          fontSize: '0.7em'
        }}>&#9789;</small>
        <small style={{
          position: 'relative',
          left: '2px',
          bottom: '-1px',
          display: 'inline-block',
          transform: 'rotate(-180deg)',
          fontSize: '0.7em'
        }}>&#9789;</small>
        <small style={{
          fontSize: '0.7em'
        }}>&#9789;</small>
        <span style={{
          position: 'relative',
          left: '4px',
          fontSize: '0.7em',
          fontWeight: 'lighter'
        }}>N</span>
      </h1>
  );
};

export default LogoView
