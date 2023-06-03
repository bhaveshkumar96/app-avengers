import "./App.css";
import AllRoutes from "./pages/AllRoutes";
import Home from "./pages/Home";
import MyBlogs from "./pages/MyBlogs";
import { NaviBar } from "./components/NaviBar";
function App() {
  return (
    <div className="App">
      <NaviBar />
      <AllRoutes />
    </div>
  );
}

export default App;
