import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from 'react-router-dom';
import Nav from './routes/Nav/nav.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>

  );
}

export default App;
