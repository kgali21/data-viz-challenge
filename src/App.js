import './App.css';

// import SalesByDay from './components/salesByDayBasicBar.js';
// import SalesByDayChart from './components/salesByDayStacked.js';
import SalesBarStack from './components/salesByBarStack.js';

function App() {
  return (
    <>
    <div>
      <SalesBarStack width={500} height={500} event={false} />
    </div>
    </>
  );
}

export default App;
