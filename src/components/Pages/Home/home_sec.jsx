	import { BsArrowRight,BsArrowUpRight } from "react-icons/bs";
	import section4img1 from '../../../assets/section4img1.png'
	import section5img1 from '../../../assets/section5img1.png'
	import section6img1 from '../../../assets/section6img1.png'
	import section6img2 from '../../../assets/section6img2.png'
	import section7img1 from '../../../assets/section7img1.png'
	import section7img2 from '../../../assets/section7img2.png'
	import section8img1 from '../../../assets/section8img1.png'

export const home_sec= [
	{
	 id:4,
	 head:'Never miss a moment with voice and video calls',
	 desc:'From a group call to classmates to a quick call with mom, feel like you’re in the same room with voice and video calls.',
	 image1:section4img1,
	 arrow:<BsArrowRight/>,
	},
	{
	 id:5,
	 head:<div>Speak <span className='green_text'>freely</span></div>,
	 desc:'With end-to-end encryption, your personal messages and calls are secured. Only you and the person youre talking to can read or listen to them, and nobody in between, not even WhatsApp.',
	 image1:section5img1,
	 arrow:<BsArrowRight/>,
	 theme:'dark',
	 reverse:true
	},
	{
	 id:6,
	 head:'Keep in touch with your groups',
	 desc:'Whether it is planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless.',
	 image1:section6img1,
	 image2:section6img2,
	 arrow:<BsArrowRight/>,
	},
	{
	 id:7,
	 head:'Say what you feel',
	 desc:'Express yourself without words. Use stickers and GIFs or share everyday moments on Status. Record a voice message for a quick hello or a longer story.',
	 image1:section7img1,
	 image2:section7img2,
	 arrow:<BsArrowRight/>,
	 reverse:true
	},
	{
	 id:8,
	 head:'Transform your business',
	 desc:'WhatsApp Business helps you reach your customers globally to deliver compelling experiences at scale. Showcase your products and services, increase sales, and build relationships all with WhatsApp.',
	 image1:section8img1,
	
	},

]