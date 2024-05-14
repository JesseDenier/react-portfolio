import { Outlet } from "react-router-dom";

function App() {
  // Outlet component conditionally swaps between the different pages according to the URL.
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;