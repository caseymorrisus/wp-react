const addDefault = Default => WrappedComponent => props => {
  return props.useDefault
    ? <Default {...props} />
    : <WrappedComponent {...props} />
}

export default addDefault