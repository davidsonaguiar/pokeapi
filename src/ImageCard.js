function ImageCard ({name, src}) {
    return (
        <div className='img'>
            <img alt={name} src={src}/>
        </div>
    )
}

export default ImageCard;