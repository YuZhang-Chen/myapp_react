import localImage1 from '../images/蔡英文.jpg';
import localImage2 from '../images/賴清德.jpg';
import localImage3 from '../images/陳水扁.jpg';

const Image = () => {
    return (
        <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRP9PaaZ_GDxXWEmOMM789vCPxtnp9CqNlQQ&s"
            alt='no'
            className="gallery-image"
        />
    )
}

const ImageLocal1 = () => {
    return (
        <img src={localImage1} alt='no' className="gallery-image"/>
    )
}

const ImageLocal2 = () => {
    return (
        <img src={localImage2} alt='no' className="gallery-image"/>
    )
}

const ImageLocal3 = () => {
    return (
        <img src={localImage3} alt='no' className="gallery-image"/>
    )
}

const Gallery = () => {
    return (
        <section className="gallery-section">
            <h1>牛頓被蘋果砸到</h1>
            <Image />
            <Image />
            <Image />
            <ImageLocal1 />
            <ImageLocal2 />
            <ImageLocal3 />
        </section>
    )
}

export default Gallery;