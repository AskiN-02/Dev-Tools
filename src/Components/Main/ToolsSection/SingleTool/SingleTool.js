import { useState } from 'react';
import './SingleTool.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaShareSquare } from 'react-icons/fa';
import * as Icons from 'react-icons/fa';
function SingleTool(props) {
	const { type, icon, content } = props.tool;
	const [active, setActive] = useState(false);

	const DynamicFaIcon = ({ name }) => {
		const IconComponent = Icons[name];

		if (!IconComponent) {
			return <Icons.FaBeer />;
		}

		return <IconComponent />;
	};

	return (
		<div
			className={active ? 'tool__box active' : 'tool__box'}
			style={
				active
					? {
							height: `calc(52px * ${content.length} + 58px)`,
					  }
					: { height: '58px' }
			}
			onClick={() => {
				if (content.length > 0) {
					setActive(!active);
				}
			}}>
			<div className='tool__box-title'>
				<div className='box-title__info'>
					<DynamicFaIcon name={icon} />
					<p>{type}</p>
				</div>
				<FaChevronLeft
					style={
						active
							? { transform: 'rotate(-90deg)' }
							: { transform: 'rotate(0)' }
					}
				/>
			</div>
			{content.map(({ link, name }) => (
				<div className='tool-box__row' key={link}>
					<a href={link} target='_blank' rel='noreferrer'>
						<p>{name}</p>
						<FaShareSquare />
					</a>
				</div>
			))}
		</div>
	);
}

export default SingleTool;
