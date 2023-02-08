import React from 'react';
import './App.css';


// import Clock from './components/Clock';
// import Toggle from './components/Toggle';
// import Greeting from './components/Greeting';
// import LogControl from './components/LogControl';
// import Mailbox from './components/Mailbox';
// import Page from './components/Page';
// import MultipleButton from './components/materialui/MultipleButton';

// import IconLabelButtons from './components/materialui/IconLabelButton';

// import List from './components/List';

// import Blog from './components/Blog';

import NameForm from './components/NameForm';

function App() {
  // const numbers=[1,2,3,4,5,6,7,8,9,10];
  // const posts = [
  //   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  //   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  // ];
  return (
    <div className="App">
  {/* //    <Clock increament={3} />
  //    <Toggle />
  //    <Greeting isToggleOn={true}/>
  //   <LogControl />
  //   <Mailbox undreadmessage={['React',"vue", "Angular"]}/>
  //   <Page />
  //  <MultipleButton />
  //  <IconLabelButtons /> */}

{/* <Blog posts={posts} /> */}
{/*  */}
   {/* <List numbers={numbers} /> */}


<NameForm />

    </div>
  );
}

export default App;
