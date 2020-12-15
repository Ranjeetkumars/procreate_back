//import getAppStore from './store/store';
import { Provider } from "react-redux";
import AppRoute from "./screen/AppRoute";
//import { createStore } from 'redux'
//import rootReducer from './reducers/combinedReducer'
//const store = createStore(rootReducer)
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;
