import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { devNavUrl, getUrlParam } from "../../../helpers/functions-general.jsx";
import LcssLogo from "../../../svg/LcssLogo.jsx";
const CreatePasswordSuccess = () => {
  const redirect = getUrlParam().get("redirect");

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-[25rem] w-full text-center p-6">
          <div className="flex justify-center items-center flex-col">
            <LcssLogo />
          </div>
          <FaCheck className="mx-auto text-6xl mb-5 mt-8 fill-green-600" />
          <h1 className="text-2xl uppercase mb-2">All Set</h1>
          <p className="mb-6">
            Your password has been successfully set! You can now login using
            your password.
          </p>
          <a href={`${devNavUrl}${redirect}`} className="btn-primary">
            Proceed to login
          </a>
        </div>
      </div>
    </>
  );
};

export default CreatePasswordSuccess;
