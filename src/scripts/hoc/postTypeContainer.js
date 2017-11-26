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
    posts: state[type][type],  
    isFetching: state[type].isFetching,
    errorMsg: state[type].errorMsg,
    hasError: state[type].hasError
  })

  return connect(mapStateToProps)(PostTypeContainer)
}

export default postTypeContainer