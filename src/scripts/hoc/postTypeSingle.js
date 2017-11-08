const postTypeSingle = () => ({data, type}) => {
  return (
    <article className={type}>
      <h3>{data.title.rendered}</h3>
      <p dangerouslySetInnerHTML={{ __html: data.content.rendered }}></p>
    </article>
  )
}

export default postTypeSingle