import './ContactSection.css';
import ReCAPTCHA from 'react-google-recaptcha';
import {
	collection,
	addDoc,
	updateDoc,
	arrayUnion,
	doc,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';

function ContactSection() {
	function onChange(value) {
		console.log('Captcha value:', value);
	}

	const addToolCategory = async () => {
		const toolsRef = collection(db, 'tools');
		try {
			const docRef = await addDoc(toolsRef, {
				type: 'Nauka',
				content: [],
				icon: 'FaUserGraduate',
			});
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};

	const addTool = async () => {
		const toolsRef = doc(db, 'tools', 'oXiBL3I9KQz9ztHlUkBg');

		try {
			const docRef = await updateDoc(toolsRef, {
				content: arrayUnion({
					name: 'Daily Coding Problem',
					link: 'https://www.dailycodingproblem.com/',
				}),
			});
			console.log(docRef);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section className='contact wrapper'>
			<div className='contact__text'>
				<h2>Znasz narzędzia których nie ma na stronie ?</h2>
				<h3>Podziel się z nami a my je umieścimy</h3>
			</div>
			<div className='contact__input'>
				<label htmlFor='link'>Link do strony:</label>
				<input type='text' id='link' placeholder='devtools.com' />
			</div>
			<div className='contact__submit'>
				<ReCAPTCHA
					size='normal'
					sitekey={process.env.REACT_APP_CAPTCHA_KEY}
					onChange={onChange}
					className='reCaptcha'
				/>
				<div className='contact__submit-btn'>
					<button onClick={addTool}>Wyślij</button>
				</div>
			</div>
		</section>
	);
}

export default ContactSection;
