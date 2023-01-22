import "./App.css";
import TensorFlowComponent from "./components/tensorflow/TensorFlowComponent";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LandingPage from "./components/ui/LandingPage";
import Exercises from "./components/ui/Exercises";
import Workouts from "./components/ui/Workouts";
import NavigationBar from "./components/ui/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="landing" element={<LandingPage />} />
            <Route exact path="/" element={<Workouts />} />
            <Route exact path="exercises" element={<Exercises />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
