import React from "react";
import { FaSearch } from "react-icons/fa";
import { setError, setIsSearch, setMessage } from "../../store/StoreAction";

const SearchBarWithFilterStatus = ({
  search,
  dispatch,
  store,
  result,
  isFetching,
  setOnSearch,
  onSearch,
  isFilter = false,
}) => {
  const handleChange = (e) => {
    if (e.target.value === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
    }
    if (isFilter === true) {
      dispatch(setIsSearch(true));
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
      {/* <div className="flex items-center pb-2">
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
      </div> */}

      <div className="relative">
        <div
          type="submit"
          className="absolute left-2 top-[5.1px] text-[14px] h-[30px] py-[3px] rounded-tr-none rounded-br-none border-l-0  text-gray-400 cursor-default"
        >
          <FaSearch />
        </div>
        <input
          type="search"
          placeholder="Search here..."
          className="text-xs py-[0px] h-[30px] pl-7"
          ref={search}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </form>
  );
};

export default SearchBarWithFilterStatus;
