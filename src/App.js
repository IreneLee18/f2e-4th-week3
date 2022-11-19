import { Routes, Route } from "react-router-dom";
import Welcome from "./page/Welcome/Welcome";
import Roles from "./page/Roles/Roles";
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Welcome />} />
        <Route path="roles" element={<Roles />} />
      </Route>
    </Routes>
  );
}

export default App;
