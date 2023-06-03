import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoutes from "./pages/AllRoutes";
import Home from "./pages/Home";
import MyBlogs from "./pages/MyBlogs";
import { NaviBar } from "./components/NaviBar";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <NaviBar/>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
