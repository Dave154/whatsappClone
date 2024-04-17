import { RiDownloadLine } from "react-icons/ri";



const DownLoadBtn=({type,location})=>{
	return<a href="#">
		
	<button className={`download_btn  fancy_btn hover_${type}`}>
			 <span className={`download ${location === 'nav' && 'download_nav' }`}>Download</span> 
			 <i><RiDownloadLine /></i></button>
	</a>
}
export default DownLoadBtn