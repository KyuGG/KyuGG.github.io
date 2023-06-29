import '../styles/logo.scss'
import { LinkProps } from './Link'

const Logo: preact.FunctionComponent<LinkProps> = ({ social }) => {
	return (
		<img
			className='social-logo'
			src={socialAvatarUrl[social]}
			alt='?'
		/>
	)
}

export enum Social {
	GitHub = 'GitHub',
	Steam = 'Steam',
}

const socialAvatarUrl: Record<Social, string> = {
    [Social.GitHub]: 'https://github.com/fluidicon.png',
    [Social.Steam]: 'https://steamcommunity.com/favicon.ico'
}

export default Logo
