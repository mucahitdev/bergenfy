import PhotoAlbum from "react-photo-album";

const Images = () => {
    const photos = [
        {
            src: "https://upload.wikimedia.org/wikipedia/tr/b/ba/Belgin_Sar%C4%B1lm%C4%B1%C5%9Fer.jpg",
            width: 285,
            height: 410
        },
        {
            src: "https://icdn.ensonhaber.com/resimler/diger/kok/2020/07/15/bergen_760.jpg",
            width: 750,
            height: 841
        },
        {
            src: "https://img-s1.onedio.com/id-615448ccb6f211f633097a5a/rev-0/w-620/f-jpg/s-891b670e47ce0ecc1d26deb04ecff57bc7ef4212.jpg",
            width: 620,
            height: 725
        },
        {
            src: "https://tr.web.img4.acsta.net/newsv7/21/08/14/14/12/3182970.jpg",
            width: 1280,
            height: 720
        },
        {
            src: "https://cdnntr1.img.sputniknews.com/img/07e5/06/0c/1044715485_60:0:1085:769_1920x0_80_0_0_20fb0ea65bcac639714e52269aa000c9.jpg",
            width: 1920,
            height: 1440
        },
        {
            src: "https://foto.haberler.com/haber/2020/12/01/bergen-filminin-senaryosu-hazir-13770322_amp.jpg",
            width: 1200,
            height: 2091
        },
        {
            src: "https://cdn.karar.com/news/1426820.jpg",
            width: 1200,
            height: 675
        },
        {
            src: "https://i1.sndcdn.com/artworks-000479321673-5tcdch-t500x500.jpg",
            width: 500,
            height: 500
        },
        {
            src: "https://i01.sozcucdn.com/wp-content/uploads/2020/12/02/bergen6-503x660.jpeg",
            width: 503,
            height: 660
        },
        {
            src: "https://i.cnnturk.com/i/cnnturk/75/1200x650/540c4921f630992914300b69.jpg",
            width: 1200,
            height: 650
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7n6eMGHyHeGikhxObe-4qVnkhEMUoZixfCg&usqp=CAU.jpg",
            width: 1080,
            height: 1237
        },
        {
            src: "https://iatkv.tmgrup.com.tr/703f89/616/321/0/0/750/390?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2021%2F11%2F10%2Fbergen-nasil-oldu-bergenin-katili-kim-bergen-filminin-konusu-nedir-oyunculari-kimler-ne-zaman-vizyona-girecek-1636543508373.jpg",
            width: 616,
            height: 321
        },
        {
            src: "https://foto.sondakika.com/haber/2021/06/11/bergen-039-i-olduren-halis-serbest-ilk-kez-ko-5-14195693_osd.jpg",
            width: 599,
            height: 448
        },
        {
            src: "https://static.daktilo.com/sites/449/uploads/2020/05/25/bergen-kapak.jpg",
            width: 640,
            height: 480
        },
        {
            src: "https://i.cnnturk.com/i/cnnturk/75/0x555/540c4a67f630992914300b85",
            width: 1256,
            height: 555
        }
    ];
    return (
        <div className="mt-10">
            <div className="container mx-auto">
                <PhotoAlbum layout="masonry" photos={photos}  />
            </div>
        </div>
    )
}

export default Images