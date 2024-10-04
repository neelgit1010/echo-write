import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/signup" element={<h1>signup</h1>} />
        <Route path="/editor" element={<h1>Editor</h1>} />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default App;
