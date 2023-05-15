import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__inner">
            <div className='logo'></div>
            <ul className='menu'>
                <li className='menu__link'><Link href="/projects">Projects</Link></li>
                <li className='menu__link'><Link href="/services">Expertise</Link></li>
                <li className='menu__link'><Link href="/studio">Studio</Link></li>
                <li className='menu__link'><Link href="/thoughts">Thoughts</Link></li>
                <li className='menu__link'><Link href="/contact">Contact</Link></li>
            </ul>
            <div>
                <div className='social-media'>
                    <Link href="#" className="social-media__icon" id="instagram">Instagram</Link>
                    <Link href="#" className="social-media__icon" id="linkedIn">LinkedIn</Link>
                </div>
                <div className="return-container">
                    <Link href="#" className="return-container__link">Back to top</Link>
                    <div className="return-container__icon"></div>
                </div>
                <div className="horizontal-line"></div>
                <div className="copyright-notice"></div>
                <ul className="legal">
                    <li className='legal__terms'><Link href="/terms">Terms</Link></li>
                    <li className='legal__privacy'><Link href="/privacy">Privacy</Link></li>
                    <li className='legal__cookies'><Link href="/cookies">Cookies</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
