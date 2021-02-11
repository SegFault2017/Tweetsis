import AnalysisPage from "./pages/AnalysisPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(reduxThunk, logger))
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={AnalysisPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
