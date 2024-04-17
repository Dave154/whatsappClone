

import React,{useContext,useState,useEffect} from 'react'
const AppContext = React.createContext()
import {data} from './data.jsx'
const AppProvider =({children})=>{
	const [isSideOpen,setIsSideOpen] = useState(false)
	const [screenSize ,setScreenSize]= useState('')
	const [menuItems,setMenuItems]= useState(data);
	const [IsFeatures, setIsFeatures]= useState(false);
	const [scrollY,setScrollY]= useState()

		const checkSize =()=>{
	setScreenSize(window.innerWidth)
			if(screenSize <=1200){
				setIsFeatures(false)
			}
			if(screenSize >= 1200){
				setIsSideOpen(false)
			}

}
const checkScroll=()=>{
	setScrollY(window.scrollY)
	// if(window.scrollY  )
}
	useEffect(()=>{
		window.addEventListener('resize', checkSize)
		return ()=>window.removeEventListener('resize', checkSize)
	},[screenSize])

useEffect(()=>{
	window.addEventListener('scroll',checkScroll)
	return ()=>window.removeEventListener(scroll,checkScroll)
},[scrollY])

	const showFeatures =(e)=>{
		if(e.target.innerText.toLowerCase() === 'features'){
			setIsFeatures(!IsFeatures)
		}else{
			setIsFeatures(false)
		}

		
	}
	const closeSide =()=>{
		setIsSideOpen(false)
	}
	const openSide=()=>{
		setIsSideOpen(true)
	}
	return <AppContext.Provider value={{isSideOpen,
	setIsSideOpen ,
	closeSide,
	openSide,
	checkSize,
	showFeatures,
	IsFeatures,
	setIsFeatures,
	menuItems,
	setMenuItems,
	scrollY
		}}>{children}</AppContext.Provider>
}

const useGlobe=()=>{
	return useContext(AppContext)
}
export {AppContext ,AppProvider , useGlobe}