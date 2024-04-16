import { RiDownloadLine } from "react-icons/ri";



const DownLoadBtn=({type,location})=>{
	return<button className={`download_btn  fancy_btn hover_${type}`}>
			 <span className={`download ${location === 'nav' && 'download_nav' }`}>Download</span> 
			 <i><RiDownloadLine /></i></button>
}
export default DownLoadBtn