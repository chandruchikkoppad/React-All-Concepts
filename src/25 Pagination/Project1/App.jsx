import axios, { Axios } from 'axios'
import React, { useState, useEffect } from 'react'
import Posts from './Posts';
import Pagination from './Pagination';
// import { usePagination } from "react-use-pagination";


const App = () => {
    let [posts, setPosts] = useState([])
    let [loading, setLoading] = useState(false)
    let [currentPage, setCurrentPage] = useState(1)
    let [postsPerpage, setPostsPage] = useState(5);
    useEffect(() => {
        let fetchPosts = async () => {
            setLoading(true)
            let res = await axios.get("https://fakestoreapi.com/products");
            setPosts(res.data);
            setLoading(false)
        }
        fetchPosts()
    }, [])
  // ! Pagination destructuring

  // let{ nextPage,previousPage}=usePagination(indexOfLastPost)
    // get current posts
    let indexOfLastPost = currentPage * postsPerpage;
    let indexOfFirstPost = indexOfLastPost - postsPerpage
    let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    // Change page
    let paginate = (pageNumbers) => setCurrentPage(pageNumbers);
  return (
    <section id='mainBlock'>
      <article>
              <h1>My Blog</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerpage={postsPerpage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </article>
    </section>
  );
}

export default App