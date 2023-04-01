import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading....</h2>
    }
    return (
        <ul className="list-group">
            {posts.map(posts => {
                return <li key={posts.id}>{posts.title}</li>;
            })}
        </ul>
        
    )
}

export default Posts
