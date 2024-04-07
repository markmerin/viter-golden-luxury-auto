import LogoForAccess from "@/component/svg/LogoForAccess";
import React from "react";
import { FaCheck } from "react-icons/fa";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  apiVersion,
  devNavUrl,
  getUrlParam,
} from "../../../helpers/functions-general";
import PageNotFound from "../../../partials/PageNotFound";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import GlaLogo from "../../../svg/GlaLogo";

const VerifyEmailOtherUser = () => {
  const key = getUrlParam().get("key");

  const { data: changeEmail, isLoading } = useQueryData(
    `${apiVersion}/user-other/verify-email/${key}`,
    "get", // method
    "change-email" // key
  );

  return (
    <>
      {changeEmail?.count === 0 || key === null || key === "" ? (
        <>
          {isLoading && (
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
              <FetchingSpinner />
            </div>
          )}
          <PageNotFound />
        </>
      ) : (
        <div
          className="flex justify-center items-center "
          style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}
        >
          {isLoading && (
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
              <FetchingSpinner />
            </div>
          )}
          <div className="w-96 p-6">
            {/* <div className="flex justify-center items-center flex-col bg-dark w-fit mx-auto py-1"> */}
            <div className="flex justify-center items-center flex-col ">
              <LogoForAccess />
            </div>
            <FaCheck className="h-16 w-16 fill-green-700 mx-auto mt-8" />
            <h2 className="mb-4 mt-2 text-lg text-center">Success!</h2>
            <p className="text-justify mb-6">
              Your email has been successfully changed! You can now login using
              your new email.
            </p>
            <p className="mt-2">
              Proceed to{" "}
              <a href={`${devNavUrl}/login`} className="w-full text-primary">
                <u> login</u>
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyEmailOtherUser;
