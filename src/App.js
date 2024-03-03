import logo from "./logo.svg";
import "./App.css";
import Login from "./content/login";
import Test from "./content/test";
// import LogIn from "./content/LogIn";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<Login />} />
        {/* <SignIn /> */}
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
