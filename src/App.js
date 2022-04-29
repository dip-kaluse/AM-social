import "./App.css";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import AddFeed from "./Components/AddFeed";
// import AddFeed from "./Components/AddFeed";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter> */}
      <AddFeed></AddFeed>
    </>
  );
}
{
  /* <Route path="/addfeed" element={<AddFeed />} /> */
}

export default App;
