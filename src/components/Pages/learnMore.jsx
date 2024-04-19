import {useParams,useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react' 
const LearnMore =()=>{
	const {id} =useParams()
	 	const navigate= useNavigate()
	 	const[count,setCount]= useState(5)
	 useEffect(()=>{
	 	const countinterval = setInterval(()=>{setCount(count - 1)},1000)
	 	const navigateback=setTimeout(()=>{
	 		navigate('/')
	 	},5000)

	 	return ()=>{
	 		clearInterval(countinterval)
	 	}
	 },[count])
	 return<section className="section container " style={{height:'100vh'}}> 
	 	<h1 >Page in progress</h1>
	 	<p>	Redirect in {count}</p>
	 </section>
}

export default LearnMore