import { ReactNode } from 'react'
import { Link }  from 'react-router-dom'
import '../styles/layout.css'

type IProps = {
  children: ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <div className='app'>
      <header>
        <img src='/public/assets/logo.png' height='150' alt='Patterson Lawn Care Services LLC' />

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/results'>Results</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© Patterson Lawn Care Services LLC</p>
      </footer>
    </div>
  )
}