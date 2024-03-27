import React from "react";
import { FaSearch } from "react-icons/fa";
import { setError, setIsSearch, setMessage } from "../../store/StoreAction";

const SearchBar = ({
  search,
  dispatch,
  store,
  result,
  isFetching,
  setOnSearch,
  onSearch,
}) => {
  const handleChange = (e) => {
    if (e.target.value === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = search.current.value;

    if (val === " " || val === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
      dispatch(setError(true));
      dispatch(setMessage("Search keyword cannot be space only or blank."));
    } else {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(true));
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="search-box"
    >
      <div className="pb-2 flex items-center relative">
        <input
          type="search"
          placeholder="Search here..."
          className="text-xs py-[0px] h-[35px] pl-7 !border-gray-300"
          ref={search}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="absolute pointer-events-none cursor-default left-0 btn-action-table border-0 text-[16px] h-[35px] py-[5px] border-l-0 text-gray-300 border-gray-300 hover:bg-[unset]"
        >
          <FaSearch />
        </button>
      </div>
      {store.isSearch && (
        <p>Result: {isFetching ? "Searching..." : result?.[0].count}</p>
      )}
    </form>
  );
};

export default SearchBar;
