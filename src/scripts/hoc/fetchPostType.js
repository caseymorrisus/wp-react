import { connect } from 'react-redux'

const fetchPostType = (PostTypeContainer, fetchType) => {
  class FetchPostType extends React.Component {
    componentDidMount() {
      this.props.fetchType(this.props.page, this.props.perPage)
    }

    render() {
      return(
        <PostTypeContainer />
      )
    }
  }

  return connect(null, {fetchType})(FetchPostType)
}

fetchPostType.propTypes = {
  fetchType: PropTypes.func,
  page: PropTypes.string,
  perPage: PropTypes.number
}

export default fetchPostType