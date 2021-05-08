import { React, useState } from "react";

const Header = (props) => {
  const {
    darkMode,
    isGridView,
    setIsGridView,
    searchQuery,
    setSearchQuery,
  } = props;
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTextChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={`${darkMode ? "header-dark" : "header-light"} header`}>
      <div className="d-flex justify-content-between">
        <div className="d-flex header-title">
          <p className="mt-2">Book Library</p>
          <div>
            <div className="options-btn">
              <img
                style={darkMode ? { background: "white" } : {}}
                className="mt-1"
                src={"/assets/icons/options.svg"}
                alt="Options"
              />
            </div>
          </div>
        </div>

        <div
          className={`header-title ${
            darkMode ? "header-title-dark" : "header-title-light"
          }`}
        >
          <img
            src="/assets/icons/grid-view.svg"
            alt="Grid View"
            onClick={() => {
              setIsGridView(true);
            }}
            style={isGridView ? { background: "#f0f0f0" } : {}}
          />
          <img
            src="/assets/icons/list-view.svg"
            alt="List View"
            onClick={() => {
              setIsGridView(false);
            }}
            style={isGridView ? {} : { background: "#f0f0f0" }}
          />
          {!isSearchVisible && (
            <img
              style={{ marginLeft: "20px" }}
              className={`${darkMode ? "search-dark" : "search-light"}`}
              src="/assets/icons/search.svg"
              alt="Search"
              onClick={() => setIsSearchVisible(true)}
            />
          )}

          {isSearchVisible && (
            <span className="search-bar-box">
              <img
                className="search-icon"
                src="/assets/icons/search.svg"
                alt="Search"
                onClick={() => setIsSearchVisible(false)}
              />
              <input
                className="search-bar"
                type="text"
                value={searchQuery}
                onChange={onSearchTextChange}
              />
              <img
                className="close-icon"
                src="/assets/icons/close.svg"
                alt="Remove Search"
                onClick={() => {
                  setSearchQuery("");
                }}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
