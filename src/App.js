import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./page/Welcome/Welcome";
import Roles from "./page/Roles/Roles";
import ProductBacklogStart from "./page/ProductBacklog/Start/ProductBacklogStart";
import ProductBacklogList from "./page/ProductBacklog/List/ProductBacklogList";
import { useState, useEffect } from "react";
import Stars from "./components/Stars";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [3000]);
  }, []);
  return (
    <>
      {/* <Stars/> */}
      {!isLoading && <Header />}
      <Routes>
        <Route path="/">
          <Route index element={<Welcome isLoading={isLoading} />} />
          <Route path="roles" element={<Roles />} />
          <Route path="product_backlog" element={<ProductBacklogStart />} />
          <Route path="product_backlog_list" element={<ProductBacklogList />} />
        </Route>
      </Routes>
      {!isLoading && (
        <footer>
          <div>2022 F2E 4th week3</div>
        </footer>
      )}
    </>
  );
}

export default App;
