import { devApiUrl, devKey } from "./functions-general";

export const queryData = (endpoint, method = "get", fd = {}) => {
  let url = devApiUrl + endpoint;
  let username = devKey;
  let password = "";
  let auth = btoa(`${username}:${password}`);
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic " + auth);
  myHeaders.append("Content-Type", "application/json");

  let options = {
    method,
    headers: myHeaders,
  };

  if (method !== "get") {
    options = {
      ...options,
      body: JSON.stringify(fd),
    };
  }

  const data = fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      // if result count is equal to 0 and success is equal to false
      // note: except from login
      // throw an error and dont proceed
      if (
        result?.count === 0 &&
        !result?.success &&
        !Object.keys(result).includes("error")
      ) {
        throw new Error("Something went wrong, API Network Error");
      }
      return result;
    });

  return data;
};
