import "./index.css";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  let router = useRoutes(routes);
  return (
    <div >
      <Provider store={store}>{router}</Provider>
    </div>
  );
}

export default App;
