import { useState } from 'react';
import './ContactSection.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { db } from '../../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ContactSection() {
	const [captchaStatus, setCaptchaStatus] = useState(true);
	const [inputValue, setInputValue] = useState('');
	function onChange() {
		setCaptchaStatus(false);
	}

	const saveLink = async () => {
		const linksRef = collection(db, 'links');
		try {
			const docRef = await addDoc(linksRef, {
				link: inputValue,
			});
			console.log(docRef)
			notify();
		} catch (error) {
			console.error(error);
		}
	};

	const notify = () =>
		toast.success('Dziękujemy 🫶 Wiadomość została wysłana', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});

	const validateInput = () => {
		if (inputValue !== '') {
			saveLink();
			setCaptchaStatus(true);
			setInputValue('');
		} else {
			toast.error('Adres strony jest wymagany', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});
		}
	};

	return (
		<>
			<section className='contact wrapper'>
				<div className='contact__text'>
					<h2>Znasz narzędzia których nie ma na stronie ?</h2>
					<h3>Podziel się z nami a my je umieścimy</h3>
				</div>
				<div className='contact__input'>
					<label htmlFor='link'>Link do strony:</label>
					<input
						type='text'
						id='link'
						placeholder='devtools.com'
						value={inputValue}
						onChange={(e) => {
							setInputValue(e.target.value);
						}}
					/>
				</div>
				<div className='contact__submit'>
					<ReCAPTCHA
						size='normal'
						//test key private key in .env
						sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
						onChange={onChange}
						className='reCaptcha'
					/>
					<div className='contact__submit-btn'>
						<button onClick={validateInput} disabled={captchaStatus}>
							Wyślij
						</button>
					</div>
				</div>
			</section>
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>
		</>
	);
}

export default ContactSection;
