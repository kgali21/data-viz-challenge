import './App.css';

import SalesByDay from './components/salesByDayBasicBar.js';
import SalesByDayChart from './components/salesByDayStacked';

function App() {
  return (
    <>
    <div className="App">
      <SalesByDayChart width={500} height={300}/>
    </div>
    <div>
      <SalesByDay />
    </div>
    </>
  );
}

export default App;
