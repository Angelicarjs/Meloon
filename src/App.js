import SellOrderList from './components/SellOrderList'
import SellOrderDetails from './components/SellOrderDetails'
import SellOrderCreation from './components/SellOrderCreation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (
    <div>
      <Router>
      <Switch>
          <Route path="/sellOrderList">
            <SellOrderList />
          </Route>
          <Route path="/sellOrderDetail">
            <SellOrderDetails />
          </Route>
          <Route path="/sellOrderCreation">
            <SellOrderCreation />
          </Route>
        </Switch>

    </Router>

    </div>
  );
}

export default App;
