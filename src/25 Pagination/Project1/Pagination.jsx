import React from 'react'

const Pagination = ({ postsPerpage, totalPosts,paginate }) => {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
        pageNumbers.push(i)
    }
    return (<nav id='nav-list'>
        <ul className="pagination">
            {pageNumbers.map(number => {
               return <li key={number} className='page-item'><a onClick={()=>paginate(number)} href="#" className='page-link' >{number}</a></li>
            })}
           
        </ul>
    </nav>)
}


export default Pagination
