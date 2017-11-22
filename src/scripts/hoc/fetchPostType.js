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

export default fetchPostType