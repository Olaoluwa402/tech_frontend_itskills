import HomeScreen from "./screens/Home/HomeScreen";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="App">
        <h1>Hello Devs</h1>
        {/* Home Screen */}
        <HomeScreen />
      </div>
    </>
  );
}

export default App;
