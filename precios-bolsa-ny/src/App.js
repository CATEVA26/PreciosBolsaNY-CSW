import logo from './logo.svg';
import './App.css';
import DynamicTable from './Presentation/Components/DynamicTable'
import HeaderTable from './Presentation/Views/HeaderTable';
function App() {
  const data = [
    {ticker:'AAPL',date:new Date().toDateString(),c:224.54,cantidad:5,total:5*224.54},
    {ticker:'MSFT',date:new Date().toDateString(),c:544.54,cantidad:10,total:10*544.54},
  ];
  return (
    <div className="App">
      <header className="App-header">
      <div className='Info'>
        <HeaderTable/>
        <DynamicTable data={data} />
      </div>
      </header>
     
    </div>

  );
}

export default App;
