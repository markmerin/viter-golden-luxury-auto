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
      <div className="w-full h-screen bg-dark">
        {changeEmail?.count === 0 || key !== null || key === "" ? (
          <>
            {isLoading && (
              <div className="absolute top-0 bottom-0 left-0 right-0 z-50 spinner-dark">
                <FetchingSpinner />
              </div>
            )}
            <PageNotFound />
          </>
        ) : (
          <div
            className="flex items-center justify-center "
            style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}
          >
            {isLoading && (
              <div className="absolute top-0 bottom-0 left-0 right-0 z-50 spinner-dark">
                <FetchingSpinner />
              </div>
            )}
            <div className="p-6 w-96">
              {/* <div className="flex flex-col items-center justify-center py-1 mx-auto bg-dark w-fit"> */}
              <div className="flex flex-col items-center justify-center ">
                <LogoForAccess />
              </div>
              <FaCheck className="w-16 h-16 mx-auto mt-8 fill-green-700" />
              <h2 className="mt-2 mb-4 text-lg text-center text-white">
                Success!
              </h2>
              <p className="mb-6 text-justify text-white">
                Your email has been successfully changed! You can now login
                using your new email.
              </p>
              <p className="mt-2 text-white">
                Proceed to{" "}
                <a href={`${devNavUrl}/login`} className="w-full text-primary">
                  <u> login</u>
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VerifyEmailOtherUser;
