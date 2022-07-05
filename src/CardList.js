import React from "react";
import Card from "./Card";


// Ref: Building a React App 2 - ZTM
const CardList = ({ robots }) => {
  // {} allows access to robot elements - deconstructing
  const cardComponent = robots.map(
    (user, i) => {
      return (
        <Card
          key={robots[i].id}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
        />
      );
    } // when you do a loop in react remember to give components unique keys
  );
  return <div>{cardComponent}</div>;
};

export default CardList;
