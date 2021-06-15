import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  return (
    <div>
      <h1>TODO List Items</h1>
      <ul className="goal-list">
        {props.items.map(goal => (
          <CourseGoalItem
            key={goal.id}
            id={goal.id}
            text={goal.text}
            onDelete={props.onDeleteItem}
          >
            {goal.text}
          </CourseGoalItem>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
