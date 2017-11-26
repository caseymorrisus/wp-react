import { connect } from 'react-redux'
import addLoader from 'hoc/addLoader'

const postTypeContainer = (PostTypeList, type) => {
  const PostTypeListWithLoader = addLoader(`Loading ${type}`)(PostTypeList)

  class PostTypeContainer extends React.PureComponent {
    render() {
      return(
        <PostTypeListWithLoader
          posts={this.props.posts}
          isFetching={this.props.isFetching}
          error={this.props.errorMsg}
          hasError={this.props.hasError}
          errorMsg={this.props.errorMsg}
          loading={this.props.isFetching && !this.props.postSize}
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