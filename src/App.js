import React from 'react';
import './App.css';


import Clock from './components/Clock';
import Toggle from './components/Toggle';
import Greeting from './components/Greeting';
import LogControl from './components/LogControl';
import Mailbox from './components/Mailbox';
import Page from './components/Page';
import MultipleButton from './components/materialui/MultipleButton';

import IconLabelButtons from './components/materialui/IconLabelButton';


function App() {
  return (
    <div className="App">
     <Clock increament={3} />
     <Toggle />
     <Greeting isToggleOn={true}/>
    <LogControl />
    <Mailbox undreadmessage={['React',"vue", "Angular"]}/>
    <Page />
   <MultipleButton />
   <IconLabelButtons />
    </div>
  );
}

export default App;
