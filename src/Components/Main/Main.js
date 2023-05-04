import './Main.css';
import ToolsSection from '../Main/ToolsSection/ToolsSection';
import ContactSection from '../Main/ContactSection/ContactSection';
import galleryImage from '../../assets/images/galleryImage.webp';
import bulbImage from '../../assets/images/bulbImage.webp';
function Main() {
	return (
		<main className='main'>
			<ToolsSection />
			<ContactSection />
			<img
				src={galleryImage}
				alt='background icon'
				className='main__background-image--one'
				draggable={false}
			/>
			<img
				src={bulbImage}
				alt='background icon'
				className='main__background-image--two'
				draggable={false}
			/>
		</main>
	);
}

export default Main;
