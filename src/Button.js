import './Button.css';

function Button (prop) {

    return (
        <div className='container-btn' id={prop.position}>
            <button
                className='btns'
                onClick={() => {
                    prop.func(prop.id)
                }}>
                {prop.icon}
            </button>
        </div>
    );
}

export default Button;