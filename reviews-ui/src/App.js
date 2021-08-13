import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'


function App() {
  const [reviewToEdit, setReviewToEdit] = useState()

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Route path='/' exact>
            <HomePage setReviewToEdit={setReviewToEdit} />
          </Route>
        </header>
      </Router>
    </div>
  );
}

export default App;
