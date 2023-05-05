import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import Home from "./page/Home";
import CreatePost from "./page/CreatePost";

const App = () => (
  <BrowserRouter>
    <header className="w-full px-4 py-4 flex justify-between items-center bg-white sm:px-8 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <Link
        to="/create-post"
        className="px-4 py-2 bg-[#6469ff] font-inter font-medium text-white rounded-md"
      >
        Create
      </Link>
    </header>
    <main className="sm:p-8 w-full min-h-[calc(100vh-73px)] px-4 py-8 bg-[#f9fafe]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
