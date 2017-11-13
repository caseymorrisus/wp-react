const Project = props => (
  <div className="project-single">
    <h2>Project: {props.match.params.slug}</h2>
  </div>
)

export default Project