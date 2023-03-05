import clsx from "clsx";
import { useState } from "react";
import Login from "~/components/auth/Login";
import Register from "~/components/auth/Register";

type Tab = "login" | "register";

const AuthPage = () => {
  const [currentTab, setCurrentTab] = useState<Tab>("login");
  return (
    <div className="h-screen lg:flex lg:items-center lg:justify-center lg:bg-slate-100">
      <div className="mx-auto mt-9 grid max-w-5xl gap-8  px-4 lg:grid-cols-2 lg:rounded-lg  lg:bg-white lg:p-6 lg:shadow-sm">
        <div
          className={clsx(
            "hidden min-h-[600px]  rounded-2xl lg:block",
            currentTab === "login" ? "bg-login" : "bg-register"
          )}
        ></div>
        <div className="mx-auto max-w-[400px] lg:max-w-full">
          <p className="mb-6 text-center text-black">Welcome to lorem..!</p>
          <div>
            {/* Tabs controllers */}
            <div className="bg-primary-light mb-8 grid grid-cols-2 space-x-4 rounded-full p-2">
              <div className="">
                <button
                  className={clsx(
                    "text-md inline-flex w-full items-center justify-center rounded-full  py-2 px-4 font-poppin font-medium text-white transition-colors",
                    currentTab === "login" && "bg-primary-400"
                  )}
                  onClick={() => setCurrentTab("login")}
                >
                  Connexion
                </button>
              </div>
              <div>
                <button
                  className={clsx(
                    "text-md inline-flex w-full items-center justify-center rounded-full  py-2 px-4 font-poppin font-medium text-white transition-colors",
                    currentTab === "register" && "bg-primary-400"
                  )}
                  onClick={() => setCurrentTab("register")}
                >
                  Inscription
                </button>
              </div>
            </div>
          </div>
          <div>{currentTab === "register" ? <Register /> : <Login />}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
