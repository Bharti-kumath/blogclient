import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./components/write/write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Gallery from "./pages/Gallery/gallery";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./components/context/Context";


function App() {
  const {user}= useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/register" element={user ? <Home/> : <Register />} />
      <Route  path="/login" element={user ? <Home/> :<Login/>}  />
      <Route  path="/settings" element={user ? <Settings/> :<Register />} />
      <Route  path="/write" element={user ? <Write/> :<Register />}  />
      <Route  path="/post/:postId" element={<Single />} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/gallery" element={<Gallery/>} />

      </Routes>
    </Router>
  );
}

export default App;
