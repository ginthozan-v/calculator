import React, { useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login'
import { doc, setDoc, onSnapshot, collection, query } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

import FeedbackImage from '../assets/image/jason-leung-60j0UB-Z_Yk-unsplash.jpg'
import db from '../firebase';
import Avatar from '../components/Avatar';
import Alert from '../components/Alert';
import FeedbackSlider from '../components/FeedbackSlider';

const Feedback = () => {
    const [user, setUser] = useState(null);
    const [feedbacks, setFeedbacks] = useState([]);
    const [isModal, setModal] = useState(false);

    const [title, setTitle] = useState('');
    const [feedback, setFeedback] = useState('');

    const responseGoogle = (response) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj));
        const { name, googleId, imageUrl } = response.profileObj;

        const param = {
            id: googleId,
            userName: name,
            image: imageUrl
        }
        setDoc(doc(db, "users", googleId), param);
        setUser(param);
    }

    const submitFeedback = () => {
        if (!user) setModal(true);

        const param = {
            id: uuidv4(),
            title: title,
            feedback: feedback,
            userName: user?.userName,
            userImage: user?.image
        }
        setDoc(doc(db, "feedbacks", param.id), param);
    }

    useEffect(() => {
        const q = query(collection(db, "feedbacks"));
        onSnapshot(q, (querySnapshot) => (
            setFeedbacks(querySnapshot.docs.map(d =>
            ({
                id: d.id,
                data: d.data()
            })
            ))
        ))
    }, [])

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user"));
        if (localUser) {
            setUser({
                id: localUser.googleId,
                userName: localUser.name,
                image: localUser.imageUrl
            })
        }
    }, [])


    return (
        <div className='flex-grow grid md:grid-cols-2'>
            <div className='relative bg-black my-10 p-4 lg:p-20'>
                {user ?
                    <div className='flex items-end gap-4'>
                        <div className='w-12 h-12 bg-slate-400 rounded-full'>
                            <Avatar imageUrl={user?.image} />
                        </div>
                        <p className='text-slate-200 font-extrabold text-2xl w-14 decoration-slate-400 underline underline-offset-4'>  {user?.userName}</p>
                    </div>
                    :
                    <>
                        <p className='text-red-200'>please login before filling the feedback.</p>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                            render={(renderProps) => (
                                <button
                                    type="button"
                                    className='bg-indigo-200 px-4 py-2 mt-4 rounded-lg text-indigo-500 font-bold uppercase shadow-lg shadow-slate-400/50 text-sm'
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    Sign in with Google
                                </button>
                            )}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy='single_host_origin'
                        />
                    </>
                }

                <div className='mt-12 flex flex-col gap-4'>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title' className='block p-3 w-full bg-zinc-900 border-0 focus:ring-0 border-b-2 text-zinc-300 sm:text-sm rounded-md' />

                    <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} maxLength="100" type="text" placeholder='feedback' className='block p-3 w-full bg-zinc-900 border-0 focus:ring-0 border-b-2 text-zinc-300 sm:text-sm rounded-md' />

                    <div className="col-span-6">
                        <button onClick={() => submitFeedback()} className='bg-sky-400 py-3 px-6 rounded-none font-semibold hover:bg-sky-200 transition-colors '>Submit</button>
                    </div>
                </div>

                <FeedbackSlider feedbacks={feedbacks && feedbacks} />
            </div>
            <div className='relative h-48 md:h-full sm:py-4 md:py-10 lg:px-20'>
                <img src={FeedbackImage} className='w-full h-full object-cover' alt='banner' />
                <a href="https://unsplash.com/photos/60j0UB-Z_Yk" target="_blank" rel="noreferrer" className='absolute bottom-1 right-1 md:bottom-14 md:right-24 bg-black text-white text-xs font-bold py-1  px-3 m-0 rounded-full bg-opacity-50'>Unsplash</a>
            </div>
            <Alert isModalOpen={isModal} setModalClose={setModal} message="Please login to give feedback 😔" />
        </div>
    )
}

export default Feedback