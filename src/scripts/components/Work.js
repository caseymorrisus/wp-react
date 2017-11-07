const Work = ({data}) => (
  <article className="work">
    <h3>{data.title.rendered}</h3>
    <p dangerouslySetInnerHTML={{ __html: data.content.rendered }}></p>
  </article>
)

export default Work