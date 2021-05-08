import { React } from "react";

const Table = (props) => {
  const { data, darkMode } = props;

  return (
    <table className="w-100 book-table">
      <thead>
        <tr>
          <th>
            Book Title & Author{" "}
            <img src={"/assets/icons/sort.svg"} alt="Sort" />{" "}
          </th>
          <th>
            Genre <img src={"/assets/icons/sort.svg"} alt="Sort" />
          </th>
          <th>
            Reading Progress <img src={"/assets/icons/sort.svg"} alt="Sort" />
          </th>
          <th>
            Last Opened <img src={"/assets/icons/sort.svg"} alt="Sort" />
          </th>
        </tr>
      </thead>

      <tbody className={darkMode ? "table-body-dark" : "table-body-light"}>
        {data.map((book) => (
          <tr key={book.id}>
            <td>
              <div className="d-flex mt-3 mb-3">
                <img src={book.thumbnail} alt="Thumbnail" />
                <div className="table-card-title">
                  <p
                    className={`card-name ${
                      darkMode ? "card-name-dark" : "card-name-light"
                    }`}
                  >
                    {book.name}
                  </p>
                  <p className="card-author">{book.author}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="fw-6 pt-3">{book.genre}</div>
            </td>
            <td>
              <div className="pt-3">{book.progress}</div>
            </td>
            <td>
              <div className="pt-3">{book.last_opened}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
