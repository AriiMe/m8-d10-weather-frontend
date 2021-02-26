/** @format */

import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RootState } from "./store";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Weather from "./components/Weather";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";


const routes = [
  { path: "/", component: Login },
  { path: "/home", component: Search },
]

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  return (
    <Router>
       <Route path="/"exact render={(props) => <Login {...props}/> } /> : <div className="columns is-multiline">
    <div className="has-text-left column is-three-fifths">
      <Route path="/home" exact render={() => <Search  title="Enter a City or Country name" />}/>
      </div>
      
      {loading ? (
        <h2 className="is-size-3 py-2">Loading...</h2>
      ) : (
        weatherData && <div className="column is-4"><Weather data={weatherData} /></div> 
      )}

      {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
      
    
    </Router>
  );
};

export default App;
