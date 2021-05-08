import { React, useState, useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [isGridView, setIsGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("books.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (response) => {
      const data = await response.json();
      setBooks(data);
      setFilteredBooks(data);
    });
  }, []);

  useEffect(() => {
    if (books) {
      const bo1 = books.filter((book) =>
        book.name.toUpperCase().includes(searchQuery.toUpperCase())
      );
      setFilteredBooks(bo1);
    }
  }, [books, searchQuery]);

  return (
    <div
      className="row m-0"
      style={
        darkMode
          ? { background: "black", height: "100%" }
          : { background: "white", height: "100%" }
      }
    >
      <div className="col-md-3 col-xl-2">
        <SideBar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="col-md-9 col-xl-10">
        <Header
          darkMode={darkMode}
          isGridView={isGridView}
          setIsGridView={setIsGridView}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Content
          darkMode={darkMode}
          isGridView={isGridView}
          books={filteredBooks}
        />
      </div>
    </div>
  );
}

export default App;
