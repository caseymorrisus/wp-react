import Loading from 'components/Loading'

const addLoader = WrappedComponent => props => props.loading
  ? <Loading message={message} />
  : <WrappedComponent {...props} />

export default addLoader