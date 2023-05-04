import './Nav.css';
import logo from '../../assets/images/logo.webp';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
function Nav() {
	return (
		<nav className='nav'>
			<div className='nav__container wrapper'>
				<img src={logo} alt='logo' />
				<ul>
					<li>
						<a
							href='https://github.com/AsskiN'
							target='_blank'
							rel='noreferrer'>
							<FaGithub />
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/dawid-kra%C5%9Bnicki-708066205/'
							target='_blank'
							rel='noreferrer'>
							<FaLinkedin />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
