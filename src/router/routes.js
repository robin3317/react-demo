import React from "react";
import { Switch, Route } from "react-router-dom";
import Screen1 from "../container/Screen1/Screen1";
import Screen2 from "../container/Screen2/Screen2";

const  Routes = () => {
 
    return (
      <Switch>
        <Route path="/" exact component={Screen1} />
        <Route path="/screen2"  component={Screen2} />
      </Switch>
    );
  
}

export default Routes;
