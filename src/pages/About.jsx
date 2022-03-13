import React from 'react'

const About = () => {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center h-my'>
            <h1 className='text-white text-7xl mb-8'>Belgin Sarılmışer</h1>
            <p className='text-white text-center max-w-2xl px-8'>Belgin Sarılmışer veya bilinen sahne adıyla Bergen, (15 Temmuz 1959, Mersin - 14 Ağustos 1989, Tarsus), Acıların Kadını albümüyle satış rekoru kıran arabesk-fantezi şarkıcısı ve oyuncu. Bergen, yaşamı ve ölümüyle Türkiye'de kadına karşı şiddetin sembol isimlerinden ve yüzlerinden biri olmuştur.</p>
            <span className='hover:scale-125'><a target="_blank" rel="noreferrer" className='text-bold text-emerald-400 ' href="https://tr.wikipedia.org/wiki/Bergen_(%C5%9Fark%C4%B1c%C4%B1)">Detaylı bilgi</a></span>
        </div>
    )
}

export default About