import { connect } from 'react-redux'
import { getPageBySlug } from 'reducers/pages'

class Page extends React.PureComponent {
  render() {
    const {pages, location: {pathname}} = this.props
    const {title, content} = getPageBySlug(pages, pathname.slice(1, -1))

    return (
      <DocumentTitle title={Utils.createTitle(title.rendered)}>
        <div>
          <h2 className="title">{title.rendered}</h2>
          <div className="content" dangerouslySetInnerHTML={{ __html: content.rendered }} />
        </div>
      </DocumentTitle>
    )
  }
}

const mapStateToProps = state => ({
  pages: state.pages.get('pages')
})

export default connect(mapStateToProps)(Page)