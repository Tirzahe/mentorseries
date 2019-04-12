import React, { useState } from 'react';
import './App.css';
import VowelCount from './VowelCount.js';
import ConsonantCount from './ConsonantCount.js';
import OtherCount from './OtherCount.js';
import stringCount from './StringCount.js';
import TotalCount from './TotalCount';

export default () => {
  // useState takes one argument (empty string here)
  // and it will use that argument as the initial state
  // the first time you render this component.
  // It then returns two values (which we extract as value and setValue)
  // the first value is the actual current state (we call that variable
  // 'value' here)
  // The second value you can call whenever you want to update that
  // state (we call it 'setValue' here)
  const [ value, setValue ] = useState('');
  const {
    vowels, consonants, others, total,
  } = stringCount(value);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counting Letters of:</h1>
        <div className="InputText">
          <h2>{value}</h2>
        </div>
        <input
          value={value}
          placeholder="enter text here"
          onChange={event => setValue(event.target.value)}/>
        <VowelCount count={vowels} />
        { /* TODO refactor */ }
        <ConsonantCount
          consonants={consonants}
          // others={others}
          // total={total} 
          />
        <OtherCount others={others} />
        <TotalCount total={total} />
        { /* <CountLabel label="Total Vowels" count={vowels} /> */ }
        { /* <CountLabel label="Total Consonants" count={consonants} /> */ }
        { /* <CountLabel label={`Total "other" characters`} count={others} /> */ }
        { /* <CountLabel label="GRAND TOTAL - ALL characters" count={total} /> */ }
      </header>
    </div>
  );
};
