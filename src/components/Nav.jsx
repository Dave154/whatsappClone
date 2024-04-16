import {FaBars} from 'react-icons/fa'
import DownloadBtn from './downloadBtn.jsx'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {useGlobe} from './context.jsx'
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import Features from './features.jsx'
import {data} from './data.jsx'
const Nav = ()=>{
	const {scrollY,openSide,IsFeatures,setIsFeatures,checkSize ,menuItems,setMenuItems,showFeatures}=useGlobe()
	console.log(scrollY)
		return<header className = {`header ${scrollY >= 20 && 'active'} ${scrollY >=58 && 'active2'} ${IsFeatures && 'header_white'}`}>
		<nav className= 'nav'>
			<button className='menu_btn lg_hidden' onClick={openSide}><FaBars/></button>
			<span className="whatsapp_logo ">
			<Link to='/'>	
			<img src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png" alt="logo"/>
			</Link>
			</span>
			<div className="menu sm_hidden">
				
			<ul className="menu_list">
				{menuItems.map(item=>{
					const {id,text,link} = item;
					if (text !== 'Home') {

					return<li className="menu_list_item" key={id} onClick={showFeatures}>
					<span>{text}</span> {text=== 'Features' && <i>{IsFeatures ? < MdKeyboardArrowUp/>:< MdKeyboardArrowDown/> }</i>}</li>
					}
				
				})}
			</ul>
			{IsFeatures && <Features items={menuItems[1].items}/>}
			
			</div>
			<DownloadBtn type='dark' location='nav'/>
		</nav>
	</header>
}
export default Nav