import { useRef, useState } from "react";
import Header from "./header";
import { validateFormData } from "../utils/validator";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUSer } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";

export function Login() {
  const dispatch = useDispatch();
  const [isSignInOrUp, setSignInOrUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fname = useRef(null);
  const toggleSignInOrUp = () => {
    console.log(isSignInOrUp, "kya hai status");

    setSignInOrUp(!isSignInOrUp);
  };
  const onFormSubmit = () => {
    const message = validateFormData(
      email?.current?.value,
      password?.current?.value,
      fname?.current?.value
    );
    setErrorMessage(message);
    console.log(message, isSignInOrUp);
    if (message) return;
    if (!isSignInOrUp) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          updateProfile(user, {
            displayName: fname?.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUSer({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessages = error.message;
          setErrorMessage(errorCode + " - " + errorMessages);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, "user in for");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessages = error.message;
          setErrorMessage(errorCode + " - " + errorMessages);
        });
    }
  };
  return (
    <>
      <Header />
      <div>
        <img
          className=" h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-image"
        ></img>
      </div>
      <div className="absolute p-12 rounded-lg  w-4/12 top-36 mx-auto bg-black my-31 right-0 left-0 opacity-80">
        <form className="text-white " onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-3xl py-3">
            {isSignInOrUp ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInOrUp && (
            <input
              ref={fname}
              type="text"
              className="my-4 p-4 w-full text-black rounded-sm"
              placeholder="Full Name"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            className="my-4 p-4 w-full text-black rounded-sm"
            placeholder="Email or phone number"
          ></input>
          <input
            ref={password}
            type="password"
            className="my-4 p-4 w-full text-black rounded-sm"
            placeholder="Password"
          ></input>
          <p className="text-red-500">{errorMessage}</p>
          <button
            className="bg-red-700 my-6 p-4 w-full rounded-lg"
            onClick={onFormSubmit}
          >
            {isSignInOrUp ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between text-white">
            <div className="flex">
              <input type="checkbox"></input>
              <label>Remember me</label>
            </div>
            <a href="https://www.netflix.com/LoginHelp">Need help?</a>
          </div>
        </form>
        <div className="text-white my-6">
          <span className="my-6">
            {isSignInOrUp ? "New to Netflix? " : "Already a user!! "}
          </span>
          <span className="cursor-pointer" onClick={toggleSignInOrUp}>
            {isSignInOrUp ? "Sign Up now" : "Sign In now"}
          </span>

          <p className="text-sm my-1">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </div>
      </div>
    </>
  );
}
export default Login;
