import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./components/Contact";
import Database from "./components/Database";
import Pages from "./components/Pages";
import Form from "./components/Form";
import Pages1 from "./Common/Pages1";
import Pages2 from "./Common/Pages2";
import Pages3 from "./Common/Pages3";
import Sign from "./components/Sign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Database" element={<Database />} />
          <Route path="/Sign" element={<Sign/>} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/Pages/:id" element={<Pages1 />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
