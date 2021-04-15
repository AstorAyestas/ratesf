import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Search";

const Main: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="flex flex-col items-center mt-4 space-y-4">
                        <Search />
                    </div>
                </Route>
                <Route path="/edit/:id">
                    <div className="flex justify-center ">
                        {/* <Edit /> */}
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default Main;
