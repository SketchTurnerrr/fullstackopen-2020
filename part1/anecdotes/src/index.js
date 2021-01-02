import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(
    Array.apply(null, Array(6)).map(Number.prototype.valueOf, 0)
  );

  const handleClick = () => {
    let len = props.anecdotes.length;
    let res = Math.floor(Math.random() * len);
    setSelected(res);
  };

  const handleVote = () => {
    const copy = [...votes];
    setVote(((copy[selected] += 1), copy));
  };

  return (
    <>
      <Display anecdote={anecdotes} selected={selected} votes={votes} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>new anecdote</button>
      <MostVoted votes={votes} anecdote={anecdotes} />
    </>
  );
};

const Display = ({ anecdote, selected, votes }) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdote[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </div>
  );
};

const MostVoted = ({ votes, anecdote }) => {
  let currentVotes = votes;
  // my goodness what is this abomination
  // take the index of the biggest number in the array 'currentVotes'
  // and then retrun an item from array of anecdotes at that index
  let atIndex = currentVotes.indexOf(Math.max(...currentVotes));
  console.log(atIndex);

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdote[atIndex]}</p>
      <p>has {votes[atIndex]} votes</p>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
