import { connect } from 'react-redux'
import { getPageBySlug } from 'reducers/pages'
import { createTitle } from 'WPReact'
import DocumentTitle from 'react-document-title'

const SamplePage = ({pages}) => {
  const page = getPageBySlug(pages, 'sample-page')
  const {title: pageTitle, content, acf: {background: background}} = page
  const {alt, title, url} = background

  return (
    <DocumentTitle title={createTitle(pageTitle.rendered)}>
      <div className="sample-page">
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