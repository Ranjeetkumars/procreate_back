import React from 'react';
import Speciality from './speciality';

const SpecialityRow = (props) => {
  const { specialities } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      {specialities.map((speciality) => {
        return <Speciality speciality={speciality} />;
      })}
    </div>
  );
};

export default SpecialityRow;
