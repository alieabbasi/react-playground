import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
}

export default App;
