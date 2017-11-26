import { connect } from 'react-redux'
import addLoader from 'hoc/addLoader'
import addDefault from 'hoc/addDefault'
import addError from 'hoc/addError'
import Loading from 'components/Loading'

import { compose } from 'redux'

const postTypeContainer = (PostTypeList, type) => {
  const DefaultComponent = props => <div className={`${type}-default`}>No {type} to display.</div>
  const ErrorComponent = ({errorMsg}) => <div className={`${type}-error`}>{errorMsg}</div>

  const EnhancedPostTypeList = compose(
    addLoader(`Loading ${type}`),
    addError(ErrorComponent),
    addDefault(DefaultComponent),
  )(PostTypeList)

  class PostTypeContainer extends React.PureComponent {
    render() {
      const {isFetching, postSize, hasError} = this.props

      return(
        <EnhancedPostTypeList
          loading={isFetching && !postSize}
          useDefault={isFetching || postSize || hasError}
          {...this.props}
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