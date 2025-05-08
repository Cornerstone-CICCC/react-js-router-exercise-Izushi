import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-100 p-4">
      <div>LOGO</div>
      <nav>
        <menu className="flex gap-4">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='/contact-us'>Contact us</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </menu>
      </nav>
    </header>
  )
}

export default Header