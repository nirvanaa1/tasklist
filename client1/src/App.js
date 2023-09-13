
import './App.css';

// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

//import BackgroundSlider from './BackgroundSlider';


function App() {
  return (
  
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  )
  }

export default App;
