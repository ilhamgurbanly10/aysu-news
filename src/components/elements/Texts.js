export const Text1 = (props) => {
    const {className, children} = props;
    return <p className={`text-1 ${className}`}>{children}</p>
}