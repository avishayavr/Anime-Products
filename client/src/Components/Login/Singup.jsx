import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseSingup/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import LoginDemo from "./templateDemo";

export default function SingUp() {
  const navigate = useNavigate();

  // states for email and password inputs
  const [singUpEmail, setSingUpEmail] = useState("");
  const [singUpPassword, setSingUpPassword] = useState("");

  // singUp function create another user
  const singUpFun = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        singUpEmail,
        singUpPassword
      );
      navigate("/login");
      // console.log(user);
    } catch (error) {
      console.log({ msg: error });
    }
  };

  return (
    <div>
      <LoginDemo
        email={setSingUpEmail}
        password={setSingUpPassword}
        loginFun={singUpFun}
        btnText={"Sing Up"}
        linkDisplay={"none"}
      />
    </div>
  );
}
