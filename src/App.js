import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

import "./App.css";
import Signup from "./pages/Signup";
import Podcasts from "./pages/Podcasts";
import CreateAPodcast from "./pages/CreateAPodcast";
import Profile from "./pages/Profile";
import { setUser } from "./slices/userSlice";
import { useDispatch } from "react-redux";
import { auth, db } from "./firebase";
import PrivateRoutes from "./components/Common/PrivateRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("from app", user);
        const unsubscribeSnapshot = onSnapshot(
          doc(db, "users", user.uid),
          (userDoc) => {
            if (userDoc.exists()) {
              const userData = userDoc.data();
              dispatch(
                setUser({
                  name: userData.name,
                  email: userData.email,
                  uid: user.uid,
                })
              );
            }
          },
          (error) => {
            console.error("Error fetching user data:", error);
          }
        );

        return () => {
          unsubscribeSnapshot();
        };
      }
      console.log("from app - no user");
    });

    return () => {
      unsubscribeAuth();
    };
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/create-a-podcast" element={<CreateAPodcast />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
