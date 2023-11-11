import React from 'react'
import { useParams } from 'react-router-dom';

function ViewPro() {
    const {pid} = useParams();
  return (
    <div>{pid}</div>
  )
}

export default ViewPro