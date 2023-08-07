import React from 'react';

const JobCard = ({ title, location }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{location}</p>
    </div>
  );
};

export default JobCard;