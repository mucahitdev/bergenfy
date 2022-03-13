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
            src: "",
            width: 142,
            height: 205
        },
        {
            src: "",
            width: 142,
            height: 205
        },
        {
            src: "",
            width: 142,
            height: 205
        },
    ];
    return (
        <div className="bg-[#181818]">
            <div className="container mx-auto">
                <PhotoAlbum layout="masonry" photos={photos}  />
            </div>
        </div>
    )
}

export default Images