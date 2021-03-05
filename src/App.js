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

  /* fetch("https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods", {
    headers: {
      "X-Api-Key": oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT
    }
  }) */
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
