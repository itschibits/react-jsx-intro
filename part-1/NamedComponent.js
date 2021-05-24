
function NamedComponent(props) {
    return <p>My name is {props.name}</p>;
}

NamedComponent.defaultProps = {
    name: "Perry"
};