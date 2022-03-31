import "./App.css";
import { Login } from "./components/login";
import { Navbar } from "./components/navbar";
import { Todos } from "./components/todos";
import { Routes, Route } from "react-router-dom";
import Register from "./components/register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path=":id" element={<Todos />} />
      </Route>
    </Routes>
  );
}

export default App;
