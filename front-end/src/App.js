import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  Landing,
  Profile,
  AddJob,
  AllJobs,
  Stats,
  SharedLayout,
  Register,
  Error,
} from "./Pages";
import Alert from "./components/Alert";

const App = () => {
 
  return (
    <>
      <Alert />
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />}></Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Profile />}></Route>
            <Route path="add-job" element={<AddJob />}></Route>
            <Route path="all-jobs" element={<AllJobs />}></Route>
            <Route path="stats" element={<Stats />}></Route>
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

//multiple aproaces
/*
  I: with router provider
  -rutele sunt incuibarite intr-o componenta centrala care se randeaza in toate componenetele
  si care randeaza componentele incuibarite in functie de ruta

  II: smilga aproace
*/
