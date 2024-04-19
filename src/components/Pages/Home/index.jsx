	import {BsArrowUpRight } from "react-icons/bs";
	import {Link } from 'react-router-dom'
import DownloadBtn from '../../downloadBtn.jsx'
	import img1 from '../../../assets/img1.png'
	import img1_1 from '../../../assets/img1_1.png'
	import img2 from '../../../assets/img2.png'
	import img3 from '../../../assets/img3.png'
	import img4 from '../../../assets/img4.png'
	import img5 from '../../../assets/img5.png'
	import img6 from '../../../assets/img6.png'
	import img7 from '../../../assets/img7.png'
	import img8 from '../../../assets/img8.png'
	import section1img1 from '../../../assets/section1img1.png'
	import section1img2 from '../../../assets/section1img2.png'
	import section1img3 from '../../../assets/section1img3.png'
	import section3img1 from '../../../assets/section3img1.png'
	import section3img2 from '../../../assets/section3img2.png'
	import section3img3 from '../../../assets/section3img3.png'
	import {useGlobe} from '../../context.jsx'
	import {home_sec} from './home_sec.jsx'
	import {motion} from 'framer-motion'

const Home =()=>{
		const {screenSize} = useGlobe()
	return <main>

		 <section className="hero container">
			<div className="hero_content">
				   <div className='hero_bg'>
					<img src={screenSize >= 1024 ? img1 : img1_1} alt=""/>
				   </div>
				   <section className="hero_main">
				   <div>
				   	<article className="main_left">
				   		<h1 className="heading">Message privately</h1>
				   		<p>	Simple, reliable, private messaging and calling for free*, 
				   		available all over the world.</p>
				   		<span>	<DownloadBtn /></span>
				   	</article>
				   	<article className="main_right">	
				   <div>	
				   	<motion.img src={img2} alt="" 
				   	initial={{opacity:0, y:10}}
				   	animate={{opacity:1,y:0}}
				   	transition={{delay:.5,duration:.5}}	
				   	/>				   		
				   	<motion.img className='moji' src={img3} alt=""
				   	initial={{opacity:0, y:0}}
				   	animate={{opacity:1,y:-20}}
				   	transition={{delay:1,type:'spring', stiffness:400 }}	
				   	/>
						 		   		
				   			<motion.img src={img4} alt=""
				   	initial={{opacity:0, y:10}}
				   	animate={{opacity:1,y:-20}}
				   	transition={{delay:1.5,duration:.5}}
				   			/>
						 		
				   			<motion.img src={img5} alt=""className='sm_hidden'
				   	initial={{opacity:0, y:10}}
				   	animate={{opacity:1,y:-20}}
				   	transition={{delay:2.5}}
				   			/>
					
				   			<motion.img src={img6} alt=""className='sm_hidden' 
				   					initial={{opacity:0, y:10}}
				   	animate={{opacity:1,y:-20}}
				   	transition={{delay:3,duration:.5}}
				   			/>
				   			
				   			<motion.img className='sm_hidden moji' src={img7} alt="" 
				   					initial={{opacity:0, y:10}}
				   	animate={{opacity:1,y:-40}}
				   	transition={{delay:3.5,type:'spring', stiffness:400 }}
				   			/>
				   			
				   			<motion.img src={img8} alt=""className='sm_hidden'
				   	initial={{opacity:0, y:10}}
				   	animate={{opacity:1,y:-20}}
				   	transition={{delay:4,duration:.5}}
				   			/>
						 </div>
				   	</article>
				   </div>
				   </section>
			</div>
			     <p className='hero_bottom_txt'>* Data charges may apply. Contact your provider for details.</p>
		</section>


		<section className=" section section1 container">
			<div className='tiny_images'>
				<motion.img src={screenSize >=1024 ? section1img1 : screenSize >= 756 ? section1img2: section1img3 } alt=""/>
			</div>
		</section>


		<section className="section section2 container">
		<span>
			<h2>With private messaging and calling, you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.</h2>
		</span>
		</section>


		<section className=" section section2 container">
			<div className='tiny_images'>
				<img src={screenSize >=1024 ? section3img1 : screenSize >= 756 ? section3img2: section3img3 } alt=""/>
			</div>
		</section>

		{home_sec.map(item=>{
			const {id,head,desc,image1,image2,theme,arrow ,reverse}= item

			return <section className={`section_theme_${theme} section container section4_end`} key={id}>
				<div className={`section4_end_container ${reverse && 'section4_end_container_reverse'}`}>
					<div className='section4_end_text'>
						<h2>{head}</h2>
						<p>{desc}</p>
						{arrow ? <Link to={`/learnmore/${id}`}>Learn More <span>{arrow}</span></Link> : <a href="#">Learn More <span><BsArrowUpRight/></span></a> }
					</div>
					<div className='section4_end_img'>
						<img src={image1} alt=""/>
						<img  className='section_absolute_img' src={image2} alt=""/>
					</div>
				
				</div>
			</section>
		})}

	</main>
}

export default Home
