import { Link } from 'react-router-dom'
import Layout from '../components/layout'
import '../styles/home.css'

export default function Home() {
  return (
    <Layout>
      <main className='home'>
        <div className='container'>
          <h2>Lawn transformation at its best!</h2>
          <button><Link to="/contact">Contact</Link></button>
          <button><Link to='/services'>See results</Link></button>
        </div>
      </main>
    </Layout>
  )
}