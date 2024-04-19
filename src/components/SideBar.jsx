import {data} from './data.jsx'
import {FaTimes} from 'react-icons/fa'
import {Link } from 'react-router-dom'
import {useState,useRef,useEffect } from 'react'
import {FaPlus,FaMinus} from 'react-icons/fa'
import {useGlobe} from './context.jsx'
import DownloadBtn from './downloadBtn.jsx'
import Socials from './socials.jsx'
const SideBar =()=>{
	const {isSideOpen,closeSide} = useGlobe()
	const [hide ,setHide]= useState(true)
		const refCont1= useRef(null)
		const refCont2= useRef(null)
		useEffect(()=>{
			const temp=refCont1.current.getBoundingClientRect().height
			console.log(temp)
			refCont2.current.style.height = `${temp}px`
		},[hide])
	const handleHide=(items)=>{
		if(items){
			setHide(!hide)
		}
	}
	
	return <aside className={`side_bar ${isSideOpen && 'showSide'}`}>
	<div className="sidebar_content">
		
		<div className="side_head">
			<button className="close_side" onClick={closeSide}><FaTimes/></button>
			<span className="whatsapp_logo">
			<Link to='/'>	
			<img src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png" alt="logo"/>
			</Link>
			</span>
		</div>
		<div className="side_list_container">
			<ul className="side_list">
				{data.map(item=>{
					const {id,text,items}=item
					return <li key={id} className="side_list_item" onClick={()=>{
						handleHide(items)
						if (!items) {
						closeSide()
						}
					}
				}>
					<span><h3>{text}</h3> {items && <i>{hide ? <FaPlus/> : <FaMinus/> }</i>} 	</span>
					{items && <div className={`side_features_list_container  ${hide && 'hide'}`} ref={refCont2}>
						<ul className={`side_features_list`} ref={refCont1}>
							{items.map((item,index)=>{
								const {text,arrow,icon,link}=item
								return <li key={index} onClick={closeSide}>
								{text === 'Whatsapp for Business' ?<a href={link}className='side_features_list_item' >
								<i className='color_green'>{icon}</i> 
								<h5>{text} </h5> <i>{arrow}</i>
								</a> :<Link to={link} className='side_features_list_item' >
								<i className='color_green'>{icon}</i>
								 <h5>{text} </h5> <i>{arrow}</i>
								 </Link> }
								 
								 </li>
							})}
						</ul>
					</div>}</li>
				})}
			</ul>
		</div>
		
		<footer className="footer">
	<section className="footer_content">	

        <div className="footer_top">	
        	<span>	<DownloadBtn/></span>
        	<span><Socials/></span>
        </div>
        </section>
        </footer>
	</div>
		
	</aside>
}
export default SideBar