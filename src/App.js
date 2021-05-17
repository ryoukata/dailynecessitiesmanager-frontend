import React from 'react';
import './App.css';
import { DailyNecessitiesItemsList } from "./dailyNecessitesItems.js";
import { AddItem } from "./addItem.js";
import { SideBar } from './sideBar';
import { ModalZone } from "./modalZone";
import { ScrollableTabsButtonAuto } from "./tab";

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
      <ModalZone />
      <ScrollableTabsButtonAuto />
      <AddItem />
      <DailyNecessitiesItemsList />
    </div>
  );
}

export default App;
