import { PiWhatsappLogoLight } from 'react-icons/pi'

const phone = '917356986777'
const message = "Hello Reve Infotech, I'd like a free consultation."
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

function WhatsApp() {
	return (
		<a
			target='_blank'
			href={url}
			rel='noopener noreferrer'
			className='flex items-center text-[14px] h-[42px] dark:bg-transparent bg-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground cursor-pointer gap-[8px] px-[12px] py-[8px] border rounded-full text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300'
		>
			<PiWhatsappLogoLight className='text-[24px] text-green-500' />
			<span>Get Your Free Tech Consultation</span>
		</a>
	)
}

export default WhatsApp
