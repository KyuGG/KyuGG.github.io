import Logo, { Social } from './Logo'
import styles from '../styles/link.module.scss'

const Link: preact.FunctionComponent<LinkProps> = ({ social }) => {
	return (
		<a
			className={`${styles.link} ${styles.gradientBox}`}
			href={socialUrl[social]}
			target='blank'
		>
			<Logo
				className={styles.socialLogo}
				social={social}
			/>
			<span>{social}</span>
		</a>
	)
}

const socialUrl: Record<Social, string> = {
	[Social.GitHub]: 'https://github.com/KyuGG',
	[Social.Steam]: 'https://steamcommunity.com/id/Kyu_GG/',
	[Social.YouTube]: 'https://www.youtube.com/@kyu_gg',
}

export interface LinkProps {
	social: Social
}

export default Link
