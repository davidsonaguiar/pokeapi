function Information ({className, name, arr}) {
    return (
        <div className={className}>
             <h3>{name}</h3>
             {arr}
        </div>
    )
}

export default Information;