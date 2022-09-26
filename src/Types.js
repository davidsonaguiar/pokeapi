import icons from './icons';

function Types ({ type }) {

    const listTypes = type?.map((type, index) => {
        return ( <p key={index} title={type.type.name}> {icons[type.type.name]} </p> )
    })

    return (
        <div className='types'>{listTypes}</div>
    )
}

export default Types;