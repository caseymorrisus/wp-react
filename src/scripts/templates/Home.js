import { createTitle } from 'WPReact'
import DocumentTitle from 'react-document-title'

const Home = props => (
  <DocumentTitle title={createTitle('Home')}>
    <div className="home">
      <h2>Home Page</h2>
      <p>This is the front page.</p>
    </div>
  </DocumentTitle>
)

export default Home