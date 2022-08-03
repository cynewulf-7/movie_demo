import React from 'react'
import '/.app.css';
import home from './pages/home';
import SearchPage from './SearchPage';
import {browserRouter as Router, Switch, Route} from 'react-router-dom';
function App () {
    return(
        //BEM
        <div className="app">
            <Router>
                <Switch>
                    <Route path ='/search'>
                  <SearchPage/>
                    </Route>
                    <Route path='/'>
                        <home/>
                    </Route>
                </Switch>
            </Router>
    
       </div>
    );
    
}
export default App;