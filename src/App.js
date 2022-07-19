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
import NoAuthOnlyRoute from "./components/NoAuthOnlyRoute";
import SelectLocationMap from "./routes/SelectLocationMap";
import SelectLocation from "./routes/SelectLocation";
import ErrorBoundary from "./components/ErrorBoundary";

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
    <div className="app">
      <div className="app-container">
        <BrowserRouter>
          <ErrorBoundary>
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
                <Route
                  path="target"
                  element={
                    <ProtectedRoute>
                      <TargetTab />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="my-account"
                  element={
                    <ProtectedRoute>
                      <MyAccountTab />
                    </ProtectedRoute>
                  }
                />
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
                element={
                  <NoAuthOnlyRoute>
                    <SignUpSendEmailVerification />
                  </NoAuthOnlyRoute>
                }
              />
              <Route
                path="/otp-verfication"
                element={
                  <NoAuthOnlyRoute>
                    <OTPVerification />
                  </NoAuthOnlyRoute>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <NoAuthOnlyRoute>
                    <SignUpForm />
                  </NoAuthOnlyRoute>
                }
              />
              <Route
                path="/select-location-map"
                element={<SelectLocationMap />}
              />
              <Route path="/select-location" element={<SelectLocation />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
