/*import { connect } from 'react-redux'
import { fetchWorks } from 'reducers/works'
import Works from 'components/Works'

class WorksContainer extends React.PureComponent {
  componentWillMount() {
    this.props.fetchWorks()
  }

  render() {
    return(
      <Works
        posts={this.props.posts}
        isFetching={this.props.isFetching}
        error={this.props.errorMsg}
        hasError={this.props.hasError}
      />
    )
  }
}

const mapStateToProps = state => ({
  posts: state.works.get('works'),
  isFetching: state.works.get('isFetching'),
  errorMsg: state.works.get('errorMsg'),
  hasError: state.works.get('hasError')
})

export default connect(mapStateToProps, {fetchWorks})(WorksContainer)*/

import { connect } from 'react-redux'

const containerPostType = (PostTypeList, type, fetchPostType) => {
  class ContainerPostType extends React.PureComponent {
    componentWillMount() {
      this.props.fetchPostType()
      //this.props.fetchWorks()
    }

    render() {
      return(
        <PostTypeList
          posts={this.props.posts}
          isFetching={this.props.isFetching}
          error={this.props.errorMsg}
          hasError={this.props.hasError}
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

  return connect(mapStateToProps, {fetchPostType})(ContainerPostType)
}

export default containerPostType