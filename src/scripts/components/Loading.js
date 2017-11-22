const Loading = ({message = 'Loading'}) => <div className="loading">{message}</div>

Loading.propTypes = {
  message: PropTypes.string
}

export default Loading