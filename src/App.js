import Home from './components/Home/Home';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
