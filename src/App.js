import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";
const Home = lazy(() => import("./components/Home/Home"));
const Quiz = lazy(() => import("./components/Quiz/Quiz"));

const App = () => {
  const [show, setshow] = useState(true);
  return (
    <Suspense fallback={<Loading />}>
      <div className="App">{show ? <Home setshow={setshow} /> : <Quiz />}</div>
    </Suspense>
  );
};

export default App;

