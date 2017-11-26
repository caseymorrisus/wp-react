import { connect } from 'react-redux'

const fetchPostType = (PostTypeContainer, fetchType, type) => {
  class FetchPostType extends React.PureComponent {
    componentDidMount() {
      if (this.props.posts.length <= 0) {
        this.props.fetchType(this.props.page, this.props.perPage)
      }
    }

    render() {
      return(
        <PostTypeContainer />
      )
    }
  }

  const mapStateToProps = state => ({
    posts: state[type][type]
  })

  return connect(mapStateToProps, {fetchType})(FetchPostType)
}

fetchPostType.propTypes = {
  fetchType: PropTypes.func,
  page: PropTypes.string,
  perPage: PropTypes.number
}

export default fetchPostType