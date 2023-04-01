import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading....</h2>
    }
    return (
        <table className="list-group">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Stock</th>

                </tr>
            </thead>
          
                {
                posts.map((post, index) => {
                    return (
                      <tbody>
                        <tr key={index}>
                          <td>{post.id}</td>
                          <td>
                            <img src={post.image} alt={post.title} width="200px" height={200} />
                          </td>
                          <td>{post.title}</td>
                          <td>{post.category}</td>
                          <td>{post.decription}</td>
                          <td>{post.price}</td>
                          <td>{post.rating.rate}</td>
                          <td>{post.rating.count}</td>
                        </tr>
                      </tbody>
                    );
                    })
                }
      </table>
    );
}

export default Posts
