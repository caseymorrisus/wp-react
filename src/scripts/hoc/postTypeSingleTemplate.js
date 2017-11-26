import { connect } from 'react-redux'
import { pluralize } from 'Utils'
import { getRestRoutes } from 'WPReact'

const postTypeSingleTemplate = (fetchSingleById, {type, useSingle}) => {
  class PostTypeSingleTemplate extends React.PureComponent {
    componentDidMount() {
      const slug = this.props.match.params.slug
      const plural = pluralize(type)

      const routes = getRestRoutes()

      const valueToCheck = useSingle ? type : plural
      const getSingle = route => route.type === valueToCheck && route.slug === slug

      const item = routes.find(getSingle)

      this.props.fetchSingleById(this.props[plural], item.id)
    }

    getContent() {
      const item = this.props[type]

      return item
        ? <div dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>    
        : <div>No {type}</div>
    }

    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    render() {
      const slug = this.props.match.params.slug
      const item = this.props[type]

      return (
        <div className={`${type}-single`}>
          <h2>{this.capitalize(type)}: {item ? item.title.rendered : slug}</h2>
          {this.getContent()}
        </div>
      )    
    }   
  }

  const mapStateToProps = state => { 
    const plural = pluralize(type)

    return {
      [plural]: state[plural].get(plural),
      [type]: state[plural].get(type)
    }
  }

  return connect(mapStateToProps, { fetchSingleById })(PostTypeSingleTemplate)
}

export default postTypeSingleTemplate