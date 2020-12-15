import React from 'react';
import SpecialityRow from './specialitiesRow';
import specialitiesData from '../data/specialitiesData';
const SIZE = 3;

const SpecialityTable = (props) => {
  const specialitiesArray = [];

  while (specialitiesData.length > 0) {
    specialitiesArray.push(specialitiesData.splice(0, SIZE));
  }

  return (
    <div>
      {specialitiesArray.map((specialitiesRow) => {
        return (
          <SpecialityRow
            specialities={specialitiesRow}
            style={{ display: 'flex', justifyContent: 'space-around' }}
          />
        );
      })}
    </div>
  );
};

export default SpecialityTable;
