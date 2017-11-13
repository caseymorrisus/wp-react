const addLogger = (WrappedComponent, name) => props => {
  console.log(`${name} props:`, props)

  return (<WrappedComponent {...props} />)
}

export default addLogger