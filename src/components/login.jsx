import { useState } from "react";
import Header from "./header";
export function Login() {
  const [isSignInOrUp, setSignInOrUp] = useState(false);
  const toggleSignInOrUp = () => {
    setSignInOrUp(!isSignInOrUp);
  };
  return (
    <>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-image"
        ></img>
      </div>
      <div className="absolute p-12 rounded-lg  w-4/12 top-36 mx-auto bg-black my-31 right-0 left-0 opacity-80">
        <form className="text-white ">
          <h1 className="text-3xl py-3">
            {isSignInOrUp ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInOrUp && (
            <input
              type="text"
              className="my-4 p-4 w-full text-black rounded-sm"
              placeholder="Full Name"
            ></input>
          )}
          <input
            type="text"
            className="my-4 p-4 w-full text-black rounded-sm"
            placeholder="Email or phone number"
          ></input>
          <input
            type="password"
            className="my-4 p-4 w-full text-black rounded-sm"
            placeholder="Password"
          ></input>
          <button className="bg-red-700 my-6 p-4 w-full rounded-lg">
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
            {isSignInOrUp ? "Sign In now" : "Sign Up now"}
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
