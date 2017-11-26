const addError = Error => WrappedComponent => props => props.hasError
  ? <Error {...props} />
  : <WrappedComponent {...props} />

export default addError