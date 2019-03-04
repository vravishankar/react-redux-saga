// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import type { Posts } from '../types/posts'

type Props = {
    loading: boolean,
    posts: Posts,
    url: string,
}

export default function PostsList(props: Props) {

    const { loading, url, posts} = props

    if (loading) return <p>Loading...</p>
    if (posts.length === 0) return <div>No Posts</div>
 
    return (
        <ul>
            { posts.map(post => (<li key={post.id}><Link to={`${url}/${post.id}`}>{post.title}</Link></li>)) }
        </ul>
    )
}
