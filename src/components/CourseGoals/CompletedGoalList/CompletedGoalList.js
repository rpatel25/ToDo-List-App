import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CompletedGoalList.css';

const CompletedGoalList = props => {
  return (
    <div>
      <h1>Completed Tasks</h1>
      <ul className="completedGoalList">
        {props.items.map(goal => (
          <CourseGoalItem
            key={goal.id}
            id={goal.id}
            text={goal.text}
            onAdd={props.onAddTODOItem}
          >
            {goal.text}
          </CourseGoalItem>
        ))}
      </ul>
    </div>
  );
};

export default CompletedGoalList;
