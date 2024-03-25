import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";

// // Mac // Mon
const urlPathLcss = "http://localhost/react-vite/viter-golden-luxury-auto";
const imgUrlPath =
  "http://localhost/react-vite/viter-golden-luxury-auto/public/img";

// // Patrick
// const urlPathLcss = `https://lcss.frontlinebusiness.com.ph/dev-app`;
// const imgUrlPath = `https://lcss.frontlinebusiness.com.ph/dev-app/img`;

// // Local Dev and Online Dev URL
export const devApiUrl = `${urlPathLcss}/rest`;
export const devBaseUrl = `${urlPathLcss}`;
export const devBaseImgUrl = `${imgUrlPath}`;
export const devNavUrl = "";

// ONLINE PRODUCTION START HERE //

// // Online URL prod hris
// export const devApiUrl = "https://lcss.frontlinebusiness.com.ph/rest";
// export const devBaseUrl = "https://lcss.frontlinebusiness.com.ph/v2";
// export const devBaseImgUrl = "https://lcss.frontlinebusiness.com.ph/v2/img";
// export const devNavUrl = "/v2";

export const devKey =
  "$2a$12$5obsBD1n0We9BIAM01RJy.4F0t4W2KmMPJppAur2eY1tmpG4y87vO";

export const apiVersion = "/v1";
export const developerPath = "developer";
export const isDemoMode = 1;
export const pesoSign = <span>&#8369;</span>;

// Copyright year
export const copyrightYear = () => {
  return new Date().getFullYear();
};

// format the numbers separated by comma
export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// get the url id parameter
export const getUrlParam = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
};

// storage after login
export function setStorageRoute(jwt) {
  localStorage.setItem("glatoken", JSON.stringify({ token: jwt }));
}

// formatting date
export const formatDate = (dateVal) => {
  const d = new Date(dateVal);
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[month]} ${date}, ${year}`;
};

// get focus on a button
export const GetFocus = (id) => {
  React.useEffect(() => {
    const obj = document.getElementById(id);
    obj.focus();
  }, []);
};

// console log values
export const consoleLog = (values, param2 = null) => {
  console.log(values, param2);
};

// get user type
export const getUserType = () => {
  const { store } = React.useContext(StoreContext);

  let link = "developer";
  // let link = store.credentials.data.role_name.toLowerCase();

  return link;
};

export const getPageLink = (link = "", path = "", title = "", arrow = "") => {
  return (
    <>
      <Link to={`${devNavUrl}/${link}/${path}`} className="w-full">
        <div className="flex">
          <div>
            <span className="font-semibold">{title}</span>
          </div>
        </div>
      </Link>

      {arrow !== "" && (
        <Link
          to={`${devNavUrl}/${link}/${path}`}
          className="btn-action-table group-hover:bg-primary group-hover:text-white"
        >
          {arrow}
        </Link>
      )}
    </>
  );
};

export const closeModal = (setShow, dispatch) => {
  setShow("");
  setTimeout(() => {
    dispatch(setIsAdd(false));
    dispatch(setIsArchive(false));
    dispatch(setIsRestore(false));
    dispatch(setIsDelete(false));
  }, 200);
};

export const handleEscape = (handleClose) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });
};

export const ordinal = (n) => {
  let result = "";
  let s = ["th", "st", "nd", "rd"];
  let v = n % 100;

  result = n + (s[(v - 20) % 10] || s[v] || s[0]);

  return result.replaceAll(",", "");
};

export const getDateNow = () => {
  return new Date(new Date().toString().split("GMT")[0] + " UTC")
    .toISOString()
    .split("T")[0];
};

export const getDateAndTimeNow = () => {
  return new Date(new Date().toString().split("GMT")[0] + " UTC")
    .toISOString()
    .split(".")[0];
};

// fetch for uploading photo or file
export const fetchFormData = (url, fd = {}) => {
  const data = fetch(url, {
    method: "post",
    body: fd,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error + " api endpoint error");
    });
  return data;
};
