import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="border border-black"></div>
        <div className="flex flex-col lg:flex-row">
          <Sidebar/>
          <div className="border border-black"></div>{" "}
          <Home/>
        </div>
      </div>
    </>
  );
}

export default App;
