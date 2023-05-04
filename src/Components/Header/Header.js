import './Header.css';
import img from '../../assets/images/headerImage.webp';
function Header() {
	return (
		<header className='header'>
			<div className='header__container wrapper'>
				<div className='header__container-text'>
					<h1>Biblioteka narzędzi</h1>
					<h3>
						To miejsce w którym znajdziesz narzędzia przyśpieszające pracę UI /
						UX Designera jak i Front-end developera
					</h3>
					<div className='text__btn'>
						<a href='#tools'>
							<button>Szukaj Narzędzia</button>
						</a>
					</div>
				</div>
				<div className='header__container-image'>
					<img src={img} alt='zestaw edukacyjny' draggable='false' />
				</div>
			</div>
			<div className='header__wave-background'></div>
		</header>
	);
}

export default Header;
