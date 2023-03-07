import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Posts from './components/Posts'
import Post from './components/Post'
import Services from './components/Services'

function App() {
  
  const featuredImage = ( featuredImageObject ) => {
    let imgWidth = featuredImageObject.media_details.sizes.full.width;
    let imgHeight = featuredImageObject.media_details.sizes.full.height;
    let imgURL = featuredImageObject.source_url;
    let img = `<img src="${imgURL}" 
        width="${imgWidth}"
        height="${imgHeight}"
        alt="${featuredImageObject.alt_text}"
        srcset="${imgURL} ${imgWidth}w,
        ${featuredImageObject.media_details.sizes.large ? featuredImageObject.media_details.sizes.large.source_url + ' 1024w,' : ''}
        ${featuredImageObject.media_details.sizes.medium_large ? featuredImageObject.media_details.sizes.medium_large.source_url + ' 768w,' : ''}
        ${featuredImageObject.media_details.sizes.medium ? featuredImageObject.media_details.sizes.medium.source_url + ' 300w' : ''}"
        sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
    return {__html: img}
  }

  return (
      <Router basename="/">
        <header id="masthead" className="site-header">
          <div className="site-branding">
            <p className="site-title">WordPress REST API</p>
          </div>
          <nav className="site-navigation">
            <ul>
              <li><NavLink to='/' end>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/blog'>Blog</NavLink></li>
              <li><NavLink to='/services'>Services</NavLink></li>
            </ul>
          </nav>
        </header>
        <main id="main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Posts featuredImage={featuredImage} />} />
            <Route path='/blog/:id' element={<Post />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </main>
        <footer>
				  <p className="copyright">Created by <a href="https://wp.bcitwebdeveloper.ca/">Jonathon Leathers</a>.</p>
        </footer>
      </Router>
  );
}

export default App;
