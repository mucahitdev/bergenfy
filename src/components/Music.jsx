import React from 'react';
import ReactPlayer from 'react-player'

const Music = ({ title, url, auto }) => {
    return (<>
        <div className='flex flex-col sm:flex-row sm:justify-between item-center border-b-2 border-amber-100 last:border-0 justify-center  px-3'> 
            <div className='flex justify-center my-4 sm:my-0'>
                <p className='text-white sm:my-auto'> {title} </p>
            </div>
            <div className='flex justify-center mb-4 sm:mb-0 py-3 sm:items-center'>
            <ReactPlayer
                url={url}
                width="275px"
                height="50px"
                playing={auto}
                controls={true}
            />
            </div>
            
        </div>
        </>
    )
}

export default Music