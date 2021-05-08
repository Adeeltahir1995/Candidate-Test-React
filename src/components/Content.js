import { React } from "react";
import Card from "./Card";
import Table from "./Table";

const Content = (props) => {
  const { isGridView, books, darkMode } = props;

  return (
    <>
      {/* Grid View */}
      {isGridView && (
        <div className="row">
          {books &&
            books.map((element) => (
              <>
                <Card key={element.id} darkMode={darkMode} book={element} />
              </>
            ))}
        </div>
      )}

      {/* List View */}
      {!isGridView && <Table darkMode={darkMode} data={books} />}
    </>
  );
};

export default Content;
