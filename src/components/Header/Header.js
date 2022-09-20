import './Header.css'
import { Link } from 'react-router-dom'
function Header(props){
  return (
    <div className="header">
      <Link to='/' className='mainLink'>
      <h3 className='pageTitle'>Green Music</h3>
      </Link>
      <nav className="navBar">
        <ul>
        <li className="navButtons"><Link className='links' to='/'>Home</Link></li>
        <li className="navButtons"><Link className='links' to='/Favourites'>Favoritos</Link></li>
        <li className="navButtons"><Link className='links' to='/Tracks'>Tracks</Link></li>
        <li className="navButtons"><Link className='links' to='/Albums'>Albums</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header