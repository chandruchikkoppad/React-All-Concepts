import React from 'react'
import { usePagination,useTable } from 'react-table';

const Pagination = ({ postsPerpage, totalPosts,paginate }) => {
    let pageNumbers = [];
    let {nextPage,previousPage}=usePagination()
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
        pageNumbers.push(i)
    }
    return (<nav id='nav-list'>
        <ul className="pagination">
            {pageNumbers.map(number => {
               return <li key={number} className='page-item'><a onClick={()=>paginate(number)} href="#" className='page-link' >{number}</a></li>
            })}
           
        </ul>
        <div>
            <button onClick={previousPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
        </div>
    </nav>
    )
    
}


export default Pagination
