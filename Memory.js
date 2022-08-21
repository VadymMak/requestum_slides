import React, { useRef } from "react";
import { useSignup } from "../../hooks/useSignup";

import styles from "./SignOn.module.css";

const SignOn = () => {
  const { error, isPending, signup } = useSignup();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const loginName = useRef("");

  const handleSubmi = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const displayName = loginName.current.value;

    signup(email, password, displayName);
  };

  return (
    <>
      <form className={styles["login-form"]} onSubmit={handleSubmi}>
        <h2>Sign Up</h2>
        <label>
          <span>email: </span>
          <input ref={emailRef} type="email" />
        </label>
        <label>
          <span>password: </span>
          <input ref={passwordRef} type="password" />
        </label>
        <label>
          <span>display name: </span>
          <input ref={loginName} type="text" />
        </label>
        {!isPending && <button className={styles.button}>Login</button>}
        {isPending && (
          <button className={styles.button} disabled>
            Loading...
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default SignOn;

/******************************* */

import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);

export const contextReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useReducer(contextReducer, { user: null })}>
      {children}
    </AuthContext.Provider>
  );
};

/*************************************** */

import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const [user, dispatch] = useContext(AuthContext);

  if (!user) {
    throw Error("useAuth must be inside an AuthContextProvider");
  }

  return [user, dispatch];
};

/************************************* */

import { useState } from "react";
import { projectAuth } from "../firebase/config";
// import { useAuth } from "./useAuth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [, dispatch] = useAuth();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      dispatch({ type: "LOGIN", payload: { user: res.user } });

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add display name to user
      await res.user.updateProfile({ displayName });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
