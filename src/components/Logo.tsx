import { LinkProps } from './Link'
import styles from '../styles/logo.module.scss'

const Logo: preact.FunctionComponent<LogoProps> = ({ social, className }) => {
	return (
		<img
			className={`${className} ${styles.socialLogo}`}
			src={socialAvatarUrl[social]}
			alt='?'
		/>
	)
}

interface LogoProps extends LinkProps {
	className: string
}

export enum Social {
	GitHub = 'GitHub',
	Steam = 'Steam',
	YouTube = 'YouTube',
}

const socialAvatarUrl: Record<Social, string> = {
	[Social.GitHub]: 'https://github.com/fluidicon.png',
	[Social.Steam]: 'https://steamcommunity.com/favicon.ico',
	[Social.YouTube]: 'https://www.youtube.com/s/desktop/64b0d6dd/img/favicon_144x144.png',
}

export default Logo
