import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetail() {
    const params = useParams();
    useEffect(() => {
        console.log("postId", params.postId)
    },[params])
  return (
    <div>PostDetail</div>
  )
}
