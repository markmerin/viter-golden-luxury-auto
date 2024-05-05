export const handleSearch = (
  e,
  setLoading,
  setName,
  setId,
  setOnFocus,
  setValue,
  setOnSearch
) => {
  setLoading(true);
  setName(e.target.value);
  setId(0);
  setOnFocus(true);

  if (e.target.value === "") {
    setLoading(false);
  }

  let timeOut;

  timeOut = setTimeout(() => {
    clearTimeout(timeOut);
    let val = e.target.value;
    if (val === "") {
      setValue(val);
      return;
    }

    setValue(val);
    setOnSearch(true);
    setLoading(false);
  }, 400);
};

export const handleClick = async (setName, setId, name, id) => {
  setName(name);
  setId(id);
};
