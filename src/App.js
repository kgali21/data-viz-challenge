// import './App.css';
import './appToo.css'
import SalesBarStack from './components/salesByBarStack.tsx';
import RevenueBarStack from './components/salesByRevenue.tsx';
import SalesByProduct from './components/salesCountByProduct.tsx';

function App() {
  return (
    <>
    <div  className="graphContainer">
      <div className="list">
        <SalesBarStack width={500} height={500} event={false}/>
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
