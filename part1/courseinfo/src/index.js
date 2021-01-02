import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },

      {
        name: 'Using props to pass data',
        exercises: 7,
      },

      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
};

const Content = (props) => {
  console.log(props.parts);
  return (
    <>
      <Part parts={props.parts[0]} exercises={props.parts[0]} />
      <Part parts={props.parts[1]} exercises={props.parts[1]} />
      <Part parts={props.parts[2]} exercises={props.parts[2]} />
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <div>
      Number of exercises{' '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
