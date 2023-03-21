import {Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import Home from "./Home";
import SideNav from "./SideNav";
import BirdHouse from "./BirdHouse";
import Login from "./Login";
import About from "./About";


function App() { 
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  
  return (
    <div id="main">
      <h1>For the love of Birds</h1>
      <SideNav user={user} setUser={setUser}/>
      <div> 
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/bird_houses/:id">
          <BirdHouse />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch> 
      </div>
    </div>
  );
}

export default App;
