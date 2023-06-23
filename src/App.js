import './App.css';
import getApi from './components/Api/Api';
import Form from './components/Form/form';
import TableBind from './components/Table/Table';
function App() {
  

  return (
    <div className="App">
      <Form />
      <TableBind/>
    </div>
  );
}

export default App;
