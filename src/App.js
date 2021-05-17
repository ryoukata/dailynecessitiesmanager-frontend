import React from 'react';
import './App.css';
import { DailyNecessitiesItemsList } from "./dailyNecessitesItems.js";
import { AddItem } from "./addItem.js";
import { SideBar } from './sideBar';

function App() {
  return (
    // <div className="App">
    //   <SideBar />
    //   <header className="App-header">
    //     <AddItem />
    //     <DailyNecessitiesItemsList />
    //   </header>
    // </div>
    <div>
      <SideBar />
      <AddItem />
      <DailyNecessitiesItemsList />
    </div>
  );
}

export default App;
