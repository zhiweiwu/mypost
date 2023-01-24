import logo from './logo.svg';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Read from './models/Read';
import Create from './models/Create';
import Update from './models/Update';
import Delete from './models/Delete';
import NotFound from './NotFound';


function App() {
  return (
    <div className="App">
    <h1>React CRUD using PHP API and MySQL</h1>
    

    <Routes>
    <Route exact path='/' element={<Read />} />
      <Route path='/read' element={<Read />} />
      <Route path='/create' element={<Create />} />
      <Route path='/delete/:id' element={<Delete />} />
      <Route path='/update/:id' element={<Update />} />
      <Route path='*' element={<NotFound />} />
      </Routes>



    </div>
  );
}

export default App;
