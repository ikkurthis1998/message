import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UnAuthHome from './components/UnAuthHome';
import { useAuth0 } from "@auth0/auth0-react";
import AuthHome from './components/AuthHome';
import GuestWelcome from './components/GuestWelcome';


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="App">
        
        <Route exact path="/">
          <header className="bg-blue flex justify-center items-center box-border w-screen h-screen px-10">
            {(!isAuthenticated) && <UnAuthHome />}
            {isAuthenticated && <AuthHome />}
          </header>
        </Route>

        <Route path="/guestLogin">
          <GuestWelcome />
        </Route>

      </div>
    </Router>
  );
}

export default App;
