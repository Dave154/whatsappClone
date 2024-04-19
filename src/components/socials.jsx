
import {socials} from './data.jsx'


const Socials =()=>{
	return<div className="socials">
			{socials.map((social,index)=>{
				const {url,icon}=social
				return<a href={url} key={index}>
				<i className="fancy_btn" key={index}>{icon}</i>	
				</a>
			})}
				</div>
}

export default Socials