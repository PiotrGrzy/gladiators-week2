import React from 'react';

export const mockedProps = {
  id: 1,
  name: 'Joe',
};
export const TestComponent = (mockedProps) => {
  return (
    <div>
      <span>{mockedProps.name}</span>
    </div>
  );
};
