import { Outlet } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <nav>Test navbar</nav>
      <Outlet /> 
      <footer>Footer</footer>
    </div>
  );
}

export default App;
