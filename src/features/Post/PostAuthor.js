import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../user/userSlice'

const PostAuthor = ({userId}) => {
    console.log(userId,'ussrid');
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuthor