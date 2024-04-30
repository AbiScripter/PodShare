import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import Button from "../components/Common/Button";
import Loader from "../components/Common/Loader";
import Header from "../layout/Header";

function Profile() {
  const user = useSelector((state) => state.user.user);

  console.log("From Profile", user);
  if (!user) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Header />
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.uid}</h1>
      <Button text={"Logout"} onClick={handleLogout} />
    </div>
  );
}

export default Profile;
