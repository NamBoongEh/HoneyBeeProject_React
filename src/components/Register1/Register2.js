import React from 'react';
import InterestArea from '../Register1/InterestArea';
import InterestHobby from '../Register1/InterestHobby';

export default function Register() {
  return (
    <div>
      <h3 style={{ fontWeight: 'bold' }}>관심정보</h3>
      <InterestArea />
      <InterestHobby />
    </div>
  );
}
