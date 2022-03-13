import React from 'react'

const Home = () => {
    const bergenHomeImage = "https://iaahbr.tmgrup.com.tr/0fa0f3/0/0/0/0/0/0?u=https://iahbr.tmgrup.com.tr/album/2021/10/01/1633068442920.jpg&l=1"
    return (
        <div className='bg-[#181818]'>
            <div className='container mx-auto flex flex-col items-center justify-center h-my'>
                <img src={bergenHomeImage} alt="Bergen" className='rounded-full w-60 h-60  sm:w-80 sm:h-80 border-4 border-lime-500 mb-8' />
                <h1 className='text-white text-7xl mb-8'>Bergen</h1>
                <p className='text-white text-center max-w-2xl px-8'>Belgin Sarılmışer veya bilinen sahne adıyla Bergen, Türk arabesk-fantezi şarkıcı ve oyuncu. Bergen, yaşam ve ölüm hikayesiyle Türkiye’de kadına karşı şiddetin sembol isimlerinden ve yüzlerinden biri olmuştur.</p>
            </div>
        </div>
    )
}

export default Home