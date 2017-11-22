import { connect } from 'react-redux'

const postTypeContainer = (PostTypeList, type) => {
  class PostTypeContainer extends React.PureComponent {
    render() {
      return(
        <PostTypeList
          posts={this.props.posts}
          isFetching={this.props.isFetching}
          error={this.props.errorMsg}
          hasError={this.props.hasError}
          errorMsg={this.props.errorMsg}
        />
      )
    }
  }

  const mapStateToProps = state => ({
    posts: state[type].get(type),
    isFetching: state[type].get('isFetching'),
    errorMsg: state[type].get('errorMsg'),
    hasError: state[type].get('hasError')
  })

  return connect(mapStateToProps)(PostTypeContainer)
}

export default postTypeContainer