import React from 'react'
import ReactPlayer from 'react-player'

const Musics = () => {
    return (
        <div>
            <ReactPlayer
                url="https://www.mboxdrive.com/senaffet.mp3"
                width="300px"
                height="100px"
                playing={true}
                controls={true}
            />
        </div>
    )
}

export default Musics