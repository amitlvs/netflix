import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUSer, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/appConfigSlice";
import { lang } from "../utils/languageConstants";

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const language = useSelector((store) => store?.appConfig?.lang).toLowerCase();
  const toggleSearch = useSelector((store) => store?.gpt?.gptSearchView);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUSer({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const onSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };
  const toggleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const getSelectedLanguage = (e) => {
    dispatch(changeLang(e?.target?.value));
  };

  return (
    <>
      <div className="absolute z-30 px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between items-center">
        <img className="w-44" src={LOGO} alt="logo"></img>
        {user && (
          <div className="flex justify-between">
            {/* Select Component to select language */}
            {toggleSearch && (
              <select
                id="states"
                onChange={getSelectedLanguage}
                className="bg-gray-50 border-gray-300 rounded-lg mr-2 h-10 w-21 p-2 dark:bg-gray-700 text-white"
              >
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option
                    defaultValue={lang.identifier}
                    key={lang.identifier}
                    value={lang.identifier}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              type="button"
              onClick={toggleGptSearch}
              className="text-white  hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-white dark:bg-white light:border-gray-700 dark:text-black dark:hover:bg-gray-300 mr-2 mb-3"
            >
              <span className="text-lg">
                {!toggleSearch ? `GPT` : "Homepage"} &nbsp;
              </span>
              {!toggleSearch && (
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              )}
            </button>
            <span className="text-white p-2 font-bold">
              {lang[language]?.greet} {user.displayName} !
            </span>
            <img
              className="w-10 h-10 mr-2 rounded-md"
              alt="profile_icon"
              src={user?.photoURL}
            ></img>
            <button
              type="button"
              onClick={onSignout}
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            >
              {lang[language]?.logout}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
