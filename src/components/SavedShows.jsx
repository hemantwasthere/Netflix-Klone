import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SavedShows = () => {

    const [savedMovies, setSavedMovies] = useState([])
    const { user } = UserAuth()

    const movieRef = doc(db, 'users', `${user?.email}`)

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (docu) => {
            setSavedMovies(docu.data()?.savedShows)
        });
    }, [user?.email])


    const deletedShow = async (passedID) => {
        try {
            const result = savedMovies.filter((movie) => movie.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result
            })
        } catch (error) {
            toast.error(error.message, {
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

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft -= 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft += 500
    }


    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4 ' >My Shows</h2>
            <div className='relative flex items-center group'>

                <MdChevronLeft onClick={slideLeft} size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' />

                <div id={"slider"} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative '>
                    {savedMovies.map((movie) => {
                        return (
                            <div key={movie.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
                                <img className='w-full h-auto block ' src={`https://image.tmdb.org/t/p/w500/${movie?.img}`} alt={movie?.title} />

                                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ' >
                                    <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center  '>
                                        {movie?.title}
                                    </p>
                                    <p onClick={() => deletedShow(movie.id)} className='cursor-pointer opacity-80 hover:opacity-100 hover:scale-125 duration-300 absolute text-gray-300 top-4 right-4 ' ><AiOutlineClose /></p>
                                </div>
                            </div>
                        )
                    })}
                </div>


                <MdChevronRight onClick={slideRight} size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' />

            </div>
        </>
    )
}

export default SavedShows