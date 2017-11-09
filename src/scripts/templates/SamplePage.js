import { connect } from 'react-redux'
import { getPageBySlug } from 'reducers/pages'

const SamplePage = ({pages}) => {
  const page = getPageBySlug(pages, 'sample-page')
  const {title: pageTitle, content, acf: {background: background}} = page
  const {alt, title, url} = background

  return (
    <DocumentTitle title={WPReact.createTitle(pageTitle.rendered)}>
      <div>
        <h2 className="title">{pageTitle.rendered}</h2>
        <div className="content" dangerouslySetInnerHTML={{ __html: content.rendered }} />
        <img src={url} alt={alt} title={title}/>
      </div>
    </DocumentTitle>
  )  
}

const mapStateToProps = state => ({
  pages: state.pages.get('pages')
})

export default connect(mapStateToProps)(SamplePage)