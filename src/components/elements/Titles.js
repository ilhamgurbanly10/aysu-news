
export const Title1 = (props) => {
    const {className, children} = props;
    return <h4 className={`title-1 ${className}`}>{children}</h4>
}

export const Title2 = (props) => {
    const {className, children} = props;
    return <h5 className={`title-2 ${className}`}>{children}</h5>
}

