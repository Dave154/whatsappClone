
import {socials} from './data.jsx'


const Socials =()=>{
	return<div className="socials">
			{socials.map((social,index)=>{
				return<i className="fancy_btn" key={index}>{social}</i>
			})}
				</div>
}

export default Socials