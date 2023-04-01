import React from 'react'

const List = () => {
  return (
    <nav>
      <ul className="page-list">
        <li className="page-item">
          <a href="#" className="page-link">
            prev
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            1
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            2
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            3
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            4
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default List
