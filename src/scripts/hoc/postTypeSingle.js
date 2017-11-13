import { Link } from 'react-router-dom'

const postTypeSingle = () => ({data, type}) => {
  return (
    <article className={type}>
      <h3><Link to={`/${type.slice(0, -1)}/${data.slug}`}>{data.title.rendered}</Link></h3>
      <p dangerouslySetInnerHTML={{ __html: data.content.rendered }}></p>
    </article>
  )
}

export default postTypeSingle