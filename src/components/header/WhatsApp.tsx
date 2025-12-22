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
			className='flex items-center text-[14px] h-[42px] bg-primary cursor-pointer gap-[8px] px-[12px] py-[8px] border rounded-full text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-lg transition-all duration-300'
		>
			<PiWhatsappLogoLight className='text-[24px] text-white group-hover:animate-pulse' />
			<span className='hidden md:inline'>Free Consultation</span>
		</a>
	)
}

export default WhatsApp
