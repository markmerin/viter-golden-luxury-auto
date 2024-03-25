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
      <div className="pb-2 flex items-center">
        <input
          type="search"
          placeholder="Search here..."
          className="rounded-tr-none rounded-br-none border-r-0 text-xs py-[0px] h-[35px]"
          ref={search}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="btn-action-table text-[16px] h-[35px] py-[5px] rounded-tl-none rounded-bl-none border-l-0 bg-primary text-white border-primary hover:bg-primary"
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
