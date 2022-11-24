import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./page/Welcome/Welcome";
import Roles from "./page/Roles/Roles";
import ProductBacklogStart from "./page/ProductBacklog/Start/ProductBacklogStart";
import ProductBacklogList from "./page/ProductBacklog/List/ProductBacklogList";
import SprintBacklogStart from "./page/SprintBacklog/Start/SprintBacklogStart";
import SprintBacklogList from "./page/SprintBacklog/List/SprintBacklogList";
import SpritStart from "./page/Sprint/Start/SpritStart";
import SprintList from "./page/Sprint/List/SprintList";
import Retro from "./page/Retro/Retro";
import Finish from "./page/Finish/Finish";
import NotFound from "./page/NotFound/NotFound";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Stars from "./components/Stars";

function App() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (pathname === "/") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, [3000]);
    } else {
      setIsLoading(false);
    }
  }, [pathname]);
  return (
    <>
      <Stars />
      {!isLoading && <Header />}
      <Routes>
        <Route path="/">
          <Route index element={<Welcome isLoading={isLoading} />} />
          <Route path="roles" element={<Roles />} />
          <Route path="product_backlog" element={<ProductBacklogStart />} />
          <Route path="product_backlog_list" element={<ProductBacklogList />} />
          <Route path="sprint_backlog" element={<SprintBacklogStart />} />
          <Route path="sprint_backlog_list" element={<SprintBacklogList />} />
          <Route path="sprint" element={<SpritStart />} />
          <Route path="sprint_list" element={<SprintList />} />
          <Route path="retro" element={<Retro />} />
          <Route path="finish" element={<Finish />} />
          <Route path="*" element={<NotFound />} />
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
