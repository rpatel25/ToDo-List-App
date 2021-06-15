import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const clickHandler = () => {
    // setDeleteText('(Deleted!)');

    if (props.onAdd) {
      props.onAdd(props.text, props.id);
    }
    if (props.onDelete) {
      props.onDelete(props.text, props.id);
    }
  };

  return (
    <li className="goal-item" onClick={clickHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
