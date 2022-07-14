import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/main.scss";
import "./assets/styles/main.less";
import Home from "./routes/Home";
import HomeTab from "./components/HomeTab";
import MyOrdersTab from "./components/MyOrdersTab";
import TargetTab from "./components/TargetTab";
import MyAccountTab from "./components/MyAccountTab";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeTab />} />
          <Route path="my-orders" element={<MyOrdersTab />} />
          <Route path="target" element={<TargetTab />} />
          <Route path="my-account" element={<MyAccountTab />} />
          <Route
            path="*"
            element={
              <main>
                <h2>Route not found</h2>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
