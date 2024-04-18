
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


const Home =()=>{
		const {screenSize} = useGlobe()
		console.log(screenSize)
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
		   	<img src={img2} alt=""/>
		   		
		   	<img className='moji' src={img3} alt=""/>
				 		   		
		   			<img src={img4} alt=""/>
				 		
		   			<img src={img5} alt=""className='sm_hidden'/>
			
		   			<img src={img6} alt=""className='sm_hidden'/>
		   			
		   			<img className='sm_hidden moji' src={img7} alt=""/>
		   			
		   			<img src={img8} alt=""className='sm_hidden'/>
				 </div>
		   	</article>
		   </div>
		   	
		   	
		   </section>
		</div>
		     <p className='hero_bottom_txt'>* Data charges may apply. Contact your provider for details.</p>

	</section>
	<section className=" section section1 container">
		<div>
			<img src={screenSize >=1024 ? section1img1 : screenSize >= 756 ? section1img2: section1img3 } alt=""/>
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
	</main>
}

export default Home
