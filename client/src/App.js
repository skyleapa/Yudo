import "./App.css";
import TensorFlowComponent from "./components/tensorflow/TensorFlowComponent";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LandingPage from "./components/ui/LandingPage";
import Exercises from "./components/ui/Exercises";
import Workouts from "./components/ui/Workouts";
import NavigationBar from "./components/ui/NavigationBar";
import LivePage from "./components/ui/LivePage";
import WorkoutList from "./components/ui/WorkoutList";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <header className="App-header">
          7777777
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            {/* <Route exact path="live" element={<LivePage />} */}
            <Route exact path="workouts" element={<Workouts />} />
            <Route exact path="workoutlists" element={<WorkoutList />} />
            <Route exact path="exercises" element={<Exercises />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
