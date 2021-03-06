import { connect }        from 'react-redux'
import { getPageBySlug }  from 'reducers/pages'
import { createTitle }    from 'WPReact'
import DocumentTitle from 'react-document-title'

const Page = ({pages, location: {pathname}}) => {
  const page = getPageBySlug(pages, pathname.slice(1, -1))
  let title, content

  if (page) {
    title = page.title
    content = page.content
  } else {
    title = { rendered: "No page title" }
    content = { rendered: 'No page content' }
  }

  return (
    <DocumentTitle title={createTitle(title.rendered)}>
      <div className="page">
        <h2 className="title">{title.rendered}</h2>
        <div className="content" dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
    </DocumentTitle>
  )
}

const mapStateToProps = state => ({
  pages: state.pages.pages
})

export default connect(mapStateToProps)(Page)