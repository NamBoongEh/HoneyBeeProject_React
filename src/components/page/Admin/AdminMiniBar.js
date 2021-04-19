import React from 'react';

export default function AdminMiniBar(props) {
  return (
    <>
      <div
        className={'container-fluid'}
        style={{
          backgroundColor: 'white',
          border: '-1px solid black',
          background: 'brown',
        }}
      >
        {props.name} <button>More</button>
      </div>
    </>
  );
}
