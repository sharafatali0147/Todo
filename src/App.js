import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Todos from './components/Todos';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Todos />} />
          <Route exact path="/todo/:id" children={<Todo />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
