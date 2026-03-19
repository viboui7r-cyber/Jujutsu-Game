import { HashRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="*" element={<Game />} />
    </Routes>
  </HashRouter>
);

export default App;
