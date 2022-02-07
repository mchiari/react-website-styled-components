import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing, Landing } from '../../components';

const Home = () => {
	return (
		<>
		<Landing />
		<InfoSection {...homeObjOne} />
		<InfoSection {...homeObjTwo} />
		<InfoSection {...homeObjThree} />
		<Pricing />
		<InfoSection {...homeObjFour} />
		</>
	)
}

export default Home;
