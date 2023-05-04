import './ToolsSection.css';
import SingleTool from './SingleTool/SingleTool';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebase';

function ToolsSection() {
	const [tools, setTools] = useState([]);

	useEffect(() => {
		let array = [];
		const getTools = async () => {
			const toolsRef = collection(db, 'tools');
			try {
				const docRef = await getDocs(toolsRef);

				docRef.forEach((element) => {
					array.push(element.data());
				});
				setTools(array);
			} catch (error) {
				console.error(error);
			}
		};
		getTools();
	}, []);

	return (
		<section className='section wrapper'>
			<h2 id='tools'>Narzędzia</h2>
			<div className='tools__container'>
				{tools.map((x) => {
					return <SingleTool tool={x} key={x.icon} />;
				})}
			</div>
		</section>
	);
}

export default ToolsSection;
