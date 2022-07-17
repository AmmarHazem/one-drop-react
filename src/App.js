import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import HomeTab from "./components/HomeTab";
import MyOrdersTab from "./components/MyOrdersTab";
import TargetTab from "./components/TargetTab";
import MyAccountTab from "./components/MyAccountTab";
import SignUpSendEmailVerification from "./routes/SignUpSendEmailVerification";
import OTPVerification from "./routes/OTPVerification";
import SignUpForm from "./routes/SignUpForm";
import useCurrentUser from "./customHooks/useCurrentUser";
import Loading from "./components/Loading";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const loading = useCurrentUser();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center pt-5">
        <Loading size={80} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeTab />} />
          <Route
            path="my-orders"
            element={
              <ProtectedRoute>
                <MyOrdersTab />
              </ProtectedRoute>
            }
          />
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
        <Route
          path="/signup-send-email-verification"
          element={<SignUpSendEmailVerification />}
        />
        <Route path="/otp-verfication" element={<OTPVerification />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
