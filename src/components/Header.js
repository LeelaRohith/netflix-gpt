import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LAGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //This is like a event listener.It triggers whenever our page loads
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

        // ...
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //onAuthstate change event handler will make the user empty
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="logo"></img>
      {user && (
        <div className="flex p-2 justify-center">
          {showGptSearch && (
            <div>
              <select
                className="py-2 px-4 mx-2 my-2 bg-red-600 text-white rounded-lg"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LAGUAGES.map((language) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div>
            <button
              className="py-2 px-4 mx-4 my-2 bg-red-600 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
          </div>
          <div className="py-[10px]">
            {" "}
            <img className="h-8 w-8" alt="user_logo" src={USER_AVATAR}></img>
          </div>

          <div>
            {" "}
            <button
              className="font-bold text-white w-24 h-12"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
