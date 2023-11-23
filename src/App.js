import "./App.css";
import Agentrequest from "./pages/Agentrequest";
import Demo from "./pages/Demo";
import { Routes, Route } from "react-router-dom";
import SelfApplied from "./pages/SelfApplied";
import OurMaid from "./pages/OurMaid";
import PlantedInterview from "./pages/PlantedInterview";
import AccessPage from "./pages/AccessPage";
import HomeCollapeseVersion from "./pages/Demo";
import SingleStaff from "./pages/SingleStaff";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomeCollapeseVersion />} />
        <Route path="/agentrequest" element={<Agentrequest />} />
        <Route path="/selfapplied" element={<SelfApplied />} />
        <Route path="/ourmaid" element={<OurMaid />} />
        <Route path="/plantedinterview" element={<PlantedInterview />} />
        <Route path="/access" element={<AccessPage />} />
        <Route path="/staff/:id" element={<SingleStaff />} />
      </Routes>
    </div>
  );
}

export default App;
