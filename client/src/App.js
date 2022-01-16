import styles from './App.module.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import Home from "./components/Home";
import CreateActivity from "./components/createactivity/CreateActivity";
import Detail from './components/Detail';
import AscDes from './components/Filters/AscDes';


function App() {
  return (
    <BrowserRouter>
    <div className={styles.App}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route path="/activity" component={CreateActivity} />
        <Route exact path="/home/:id" component={Detail} />
        <Route path="/activities" component={AscDes}/>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
