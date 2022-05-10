import React from 'react';

const Error = ({ code, message }) => {
  return (
    <div>
      <h1>
        {code} - {message}
      </h1>
    </div>
  );
};

export default Error;
