import { Routes, Route } from "react-router-dom";
import Welcome from "./page/Welcome/Welcome";
import Roles from "./page/Roles/Roles";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [3000]);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Welcome isLoading={isLoading} />} />
          <Route path="roles" element={<Roles />} />
        </Route>
      </Routes>
      {!isLoading && <Footer />}
    </>
  );
}

export default App;
