import { Link } from 'react-router-dom'

const postTypeSingle = () => ({data, type}) => {
  return (
    <article className={type}>
      <h3><Link to={`/${type.slice(0, -1)}/${data.slug}`}>{data.title.rendered}</Link></h3>
      <div dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>
    </article>
  )
}

export default postTypeSingle