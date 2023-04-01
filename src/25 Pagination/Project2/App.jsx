import React from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useEffect } from "react";
import axios, { Axios } from "axios";

const App = () => {
  let [items, setitems] = useState([]);
  useEffect(() => {
    let getComments = async () => {
      let data = await axios.get("http://localhost:5000/comments");
      setitems(data.data[0]);
      console.log(data)
    };

    getComments();
  }, []);
  let fetchComments = async currentPage => {
    let res = await axios.get(
      `http://localhost:5000/comments?_pages=${currentPage}&limit=4`
    );
    console.log(res);
    setitems(res.data[0]);
  }; 
  let handlePageClick = async data => {
    // console.log(data.selected);
    let currentPage = data.selected + 1;
    let commentsFormServer = await fetchComments(currentPage);
    setitems(commentsFormServer);

  };
  return (
    <div id="mainContainer">
      {items?.map((item, ind) => {
        // console.log(item)
        return (
          <section key={ind + 1} className="container">
            <article>
              <div>
                <h3>id:{item.id}</h3>
                <h5>Email:{item.email}</h5>
                <p>Comments:{item.body}</p>
              </div>
            </article>
          </section>
        );
      })}

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={4}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"page-list"}
        pageClassName={"page-link"}
      />
    </div>
  );
};

export default App;
