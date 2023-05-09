import Link from 'next/link'

export default function Navmenu() {
  return (
    <nav className='nav-menu'>
        <ul className='nav-menu__inner'>
            <li className='nav-menu__item'><Link href="/projects">Projects</Link></li>
            <li className='nav-menu__item'><Link href="/services">Expertise</Link></li>
            <li className='nav-menu__item'><Link href="/studio">Studio</Link></li>
            <li className='nav-menu__item'><Link href="/thoughts">Thoughts</Link></li>
            <li className='nav-menu__item'><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}