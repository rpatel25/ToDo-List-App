import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CompletedGoalList from './components/CourseGoals/CompletedGoalList/CompletedGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do the groceries!', id: 'g1' },
    { text: 'See the Doctor', id: 'g2' },
    { text: 'Cook dinner', id: 'g3' }
  ]);

  const [completedGoals, setCompletedGoals] = useState('');

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalText, goalId) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });

    setCompletedGoals(prevGoals => {
      const finishedGoals = [...prevGoals];
      finishedGoals.push({ text: goalText, id: goalId });
      return finishedGoals;
    });
  };

  const addTODOItemHandler = (goalText, goalId) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.push({ text: goalText, id: goalId });
      return updatedGoals;
    });

    setCompletedGoals(prevGoals => {
      const finishedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return finishedGoals;
    });
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No tasks found. Maybe add one?</p>
  );
  let completedContent = (
    <p style={{ textAlign: 'center' }}>No tasks completed yet!</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>
    );
  }
  if (completedGoals.length > 0) {
    completedContent = (
      <CompletedGoalList items={completedGoals} onAddTODOItem={addTODOItemHandler}/>
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
      <section id="completedGoals">
        {completedContent}
      </section>
    </div>
  );
};

export default App;
