import {Link} from 'react-router-dom';

const Features =({items})=>{
	return <div className="features">
		<ul className="features_list">
			{items.map((item,index)=>{
				const {text,icon,link,info,arrow}=item
				console.log(link)
				return<Link to={link} key={index}>
					 <li className="features_list_item" >
				<div>
					
					<span className="features_list_item_icon"><i>{icon}</i></span>
					<h5>{text}</h5>
					<p>{info}</p>
					<i>{arrow}</i>
				</div>
				
				</li>
				</Link>
			})}
		</ul>
	</div>
}
export default Features