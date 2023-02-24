import React from 'react';
import './App.css';
import { Rating } from './components/Rating';
import { Accordion } from './components/Accordion/Accordion';
import { PageTitle } from './components/AppTitle';

function App() {
  console.log('App rendering');
  return (
    <div>
      <PageTitle title={"This is APP component"}/>
      <PageTitle title={"My friends"}/>
      <Rating value = {3}/>
      <Accordion title={"Menu"}/>
      <Accordion title={"List"}/>
      <Rating value = {0} />
      <Rating value = {1} />
      <Rating value = {2} />
      <Rating value = {3} />
      <Rating value = {4} />
    </div>
  );
}

export default App;

