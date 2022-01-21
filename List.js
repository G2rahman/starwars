import React from 'react';

export const List = (props) => {
  return (
    <div>
      <h1>List</h1>
      <ul>
        {props.info.map((starship) => {
          return <li key={starship.name}>{starship.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
