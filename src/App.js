import { Provider } from "react-redux";
import "./App.css";
import Header from "./layout/Header/index";
import store from "./store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default App;
