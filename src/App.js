import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Demo1 from './demo1'
import Demo2 from './demo2'
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
      <div className="header">
        <ul>
          <li>
            <Link to="/demo1/">基础表单</Link>
          </li>
          <li>
            <Link to="/demo2/">双向绑定</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" />
        <Route path="/demo1/" component={Demo1} />
        <Route path="/demo2/" component={Demo2} />
      </div>
    </Router>
    </div>
  );
}

export default App;
