import { React } from "react";
import Switch from "react-switch";

const SideBar = (props) => {
  const { darkMode, setDarkMode } = props;

  const onDarkModeSwitchChange = (checked) => {
    setDarkMode(checked);
  };

  return (
    <>
      <div
        className={`d-none d-sm-none d-md-block sidenav ${
          darkMode ? "dark-mode-sidenav" : "light-mode-sidenav"
        } `}
      >
        {/* Library */}
        <div>
          <p className="title">Library</p>

          {/* My Books */}
          <div
            className={`d-flex mt-4 sidenav-row ${
              darkMode ? "dark-mode-selected" : ""
            }`}
          >
            <img src="/assets/icons/play.svg" alt="My Books" />
            <div className="d-flex">
              <p>My Books</p>
              <div
                className={`count-box ${darkMode ? "dark-mode-count-box" : ""}`}
              >
                <p>15</p>
              </div>
            </div>
          </div>

          {/* Add New Books */}
          <div className="d-flex sidenav-row">
            <img src="/assets/icons/add.svg" alt="Add New Books" />
            <p>Add New books</p>
          </div>
        </div>

        {/* Settings */}
        <div className="mt-5">
          <p className="title">Settings</p>

          <div
            className={`d-flex mt-4 sidenav-row ${
              darkMode ? "dark-mode-row-dark" : ""
            }`}
          >
            <img src="/assets/icons/dark-mode.svg" alt="Dark Mode" />
            <div className="d-flex">
              <p>Dark Mode</p>
              <div className="dark-mode-toggle">
                <Switch
                  onChange={onDarkModeSwitchChange}
                  checked={darkMode}
                  height={18}
                  width={30}
                  offHandleColor={"#C3C3C3"}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor={"#000000"}
                  offColor={"#F9F9F9"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-block d-sm-block d-md-none"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        <img
          className="sm-dark-mode-toggle"
          src="/assets/icons/dark-mode.svg"
          alt="Dark Mode"
        />
      </div>
    </>
  );
};

export default SideBar;
