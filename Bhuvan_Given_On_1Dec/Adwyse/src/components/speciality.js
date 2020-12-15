import React from 'react';
const COLOR = '#B3BCC7';

const Speciality = (props) => {
  const { imageComponent, title } = props.speciality;
  return (
    <div style={{ width: '5em' }}>
      <label style={createSpecializationImageStyle(imageComponent)}>
        <span style={specialisationTitleStyle}>{title}</span>
      </label>
    </div>
  );
};

const specialisationTitleStyle = {
  font: 'normal normal bold 12px/15px Lato',
  color: COLOR,
  opacity: 1,
};

const createSpecializationImageStyle = (img) => {
  return {
    fontSize: '67px',
    opacity: 1,
    backgroundImage: `url(${img})`,
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
  };
};

export default Speciality;
