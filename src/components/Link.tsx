import Logo, { Social } from './Logo'
import '../styles/link.scss'

const Link: preact.FunctionComponent<LinkProps> = ({ social }) => {
	return (
		<a
			className='link'
			href={socialUrl[social]}
			target='blank'
		>
			<Logo social={social} />
			<span>{social}</span>
		</a>
	)
}

const socialUrl: Record<Social, string> = {
	[Social.GitHub]: 'https://github.com/KyuGG',
	[Social.Steam]: 'https://steamcommunity.com/id/Kyu_GG/',
}

export interface LinkProps {
	social: Social
}

export default Link
