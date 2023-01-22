import "./App.css";
import TensorFlowComponent from "./components/tensorflow/TensorFlowComponent";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LandingPage from "./components/ui/LandingPage";
import Exercises from "./components/ui/Exercises";
import Workouts from "./components/ui/Workouts";
import NavigationBar from "./components/ui/NavigationBar";
import LivePage from "./components/ui/LivePage";
import WorkoutList from "./components/ui/WorkoutList";
import DemoPage from "./components/ui/DemoPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="LivePage" element={<LivePage />} />
            <Route exact path="workouts" element={<Workouts />} />
            <Route exact path="workoutlists" element={<WorkoutList />} />
            <Route exact path="exercises" element={<Exercises />} />
            <Route exact path="DemoPage" element={<DemoPage />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
