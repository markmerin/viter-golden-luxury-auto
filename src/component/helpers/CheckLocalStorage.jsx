export const checkLocalStorage = () => {
  let glatoken = null;
  try {
    glatoken = JSON.parse(localStorage.getItem("glatoken"));
  } catch (error) {
    glatoken = null;
  }

  return glatoken;
};
