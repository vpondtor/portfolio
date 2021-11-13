function Technologies(props) {
    let skills = props.items.map((skill) => {
        return (
            <small className="skill">
                {skill}
            </small>
        )
    }

    )
    return <div className="technologies">
        {skills}
    </div>
}

export default Technologies;