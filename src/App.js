import Directory from "./components/directory/directory.component.jsx";
import Categories from './categories.json';

const App = () => {
  return (
    <Directory categories = {Categories}/>
  );
}

export default App;
