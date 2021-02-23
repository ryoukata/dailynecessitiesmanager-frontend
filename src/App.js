import './App.css';
import { DailyNecessitiesItemsList } from "./dailyNecessitesItems.js";
import { AddItem } from "./addItem.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddItem />
        <DailyNecessitiesItemsList />
      </header>
    </div>
  );
}

export default App;
