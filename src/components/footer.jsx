import {Link } from 'react-router-dom'
import DownloadBtn from './downloadBtn.jsx'
import {footerlist,socials} from './data.jsx'
import {FaCopyright} from 'react-icons/fa'
import Socials from './socials.jsx'
const Footer = ()=>{
	return <footer className="footer">
	<section className="footer_content">	

        <div className="footer_top">	
        	<span>	<DownloadBtn/></span>
        	<span><Socials/></span>
        </div>	
		<div className="footer_section1">

			<div className="footer_section1_sub1">	
				<span className="whatsapp_logo ">
				<Link to='/'>
				<img class="_aeok" alt="WhatsApp Main Logo" src="https://static.whatsapp.net/rsrc.php/v3/yJ/r/Qhrnh5evyPV.png"/>	
				</Link>
				</span>
				<span className='footer_sm_hidden'><DownloadBtn />	</span>
			</div>

			<div className="footer_section1_sub2">
				{
					footerlist.map(item=>{
						const {id,title,list}=item
						return<div key={id} className='footerlist_container'><h3>{title}</h3>
							<ul className='footerlist'>
								{list.map((item,index)=>{
									return <li className='footerlist_item' key={index}>{item}</li>
								})}
							</ul>
						</div>
					})
				}
			</div>
		</div>
		<div className="footer_section2">	
			<div className="Tc">
				<span> 2024 <FaCopyright/></span>
				<span>	Made with love by Dave</span>
			</div>
				<span className='footer_sm_hidden'>	<Socials/></span>
		    <div className="select_country"></div>
		</div>	
	</section>
	</footer>
}
export default Footer