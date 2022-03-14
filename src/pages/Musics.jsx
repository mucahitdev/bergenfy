import React from 'react'
import Music from '../components/Music';
import { songs } from '../components/songdata';

const Musics = () => {




    return (
        <div className='bg-[#181818] h-screen '>
            <div className='bg-[#181818] pb-28'>
                <div className='container mx-auto flex  flex-col px-5'>
                    <span className='mx-auto text-white font-bold text-4xl my-4'>Musics</span>

                    {
                        songs.map((item, id) => (<Music key={id} {...item} />))
                    }

                </div>
            </div>
        </div>
    )
}

export default Musics