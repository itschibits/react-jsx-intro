function Tweet(props){
    const styles = {
            border: props.border,
            margin: props.margin,
            padding: props.padding
    };
    return (
        <div className="tweet" style={styles}>
            <p>@{props.username}: {props.name}</p>
            <p>{props.date}</p>
            <p>{props.message}</p>
        </div>
    )
}