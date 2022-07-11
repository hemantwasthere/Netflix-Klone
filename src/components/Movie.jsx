import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movie = ({ movie, id }) => {

    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()

    const movieId = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
        if (user?.email) {
            setLike(!like)
            setSaved(!saved)
            await updateDoc(movieId, {
                savedShows: arrayUnion({
                    id: movie.id,
                    title: movie.title,
                    img: movie.backdrop_path,
                })
            })
        } else {
            toast.success('Please login to save a movie', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                darkmode: true,
            });
        }
    }

    return (
        <>
            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
                <img className='w-full h-auto block ' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />

                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ' >
                    <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center  '>
                        {movie?.title}
                    </p>
                    <p onClick={saveShow}>
                        {like ? <FaHeart className='opacity-80 hover:opacity-100 hover:scale-125 duration-300 cursor-pointer absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='opacity-80 hover:opacity-100 hover:scale-125 duration-300 cursor-pointer absolute top-4 left-4 text-gray-300' />}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Movie