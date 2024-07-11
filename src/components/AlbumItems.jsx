import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItems = ({name,image, id, desc}) => {
    const nevigate = useNavigate()
  return (
    <div onClick={() => nevigate(`/album/${id}`)} className='min-w-[145px] p-2 px-3 rounded cursor-pointer hover:bg-[#d2929226]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItems