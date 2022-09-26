function NameId ({name, id}) {
    return (
        <div className='card-name-id'>
            <h2 className='card-name'>{name}</h2>
            <p className='card-id'>#{id}</p>
        </div>
    )
}

export default NameId;