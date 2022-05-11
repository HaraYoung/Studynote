import React from 'react'
import {useParams} from 'react-router-dom';

const InArticles = () => {
    const {id}= useParams();
  return (
    <div><h2>게시글 <b>{id}</b></h2></div>
  )
}

export default InArticles