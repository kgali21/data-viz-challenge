// import './App.css';
import './appToo.css'

// import SalesByDay from './components/salesByDayBasicBar.js';
// import SalesByDayChart from './components/salesByDayStacked.js';
import SalesBarStack from './components/salesByBarStack.js';
import RevenueBarStack from './components/salesByRevenue.js';
import SalesByProduct from './components/salesCountByProduct';

function App() {
  return (
    <>
    <div  className="graphContainer">
      <div className="list">
        <SalesBarStack width={500} height={500} event={false} />
      </div>
      <div>
        <RevenueBarStack width={500} height={500} event={false} />
      </div>
      <div>
        <SalesByProduct width={500} height={500} event={false}/>
      </div>
    </div>
    </>
  );
}

export default App;
