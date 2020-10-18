import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Calendar from "./pages/Calendar";
import Journal from "./pages/Journal";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Reminders from "./pages/Reminders";
import Mindfulness from "./pages/Mindfulness";
import EmergencyContact from "./pages/EmergencyContact";
import { Background } from "./components/Background";


function App() {
  return (
    <BrowserRouter>
      <Header />   
        <Main />
      <Background />
    </BrowserRouter>
  );
}

function Main(){
  return (
    <Switch>
       <Route exact path='/calendar' component={Calendar} />
       <Route exact path='/journal' component={Journal} />
       <Route exact path='/login' component={Login} />
       <Route exact path='/reminders' component={Reminders} />
       <Route exact path='/mindfulness' component={Mindfulness} />
       <Route exact path='/emergencycontact' component={EmergencyContact} />
       <Route exact path='/' component={Index} />
    </Switch>
  )
}

export default App;
