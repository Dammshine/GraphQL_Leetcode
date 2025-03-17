import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Graph } from "./pages/Graph";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/graph/:graphId" element={<Graph />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
