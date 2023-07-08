import Link from './Link'
import { Social } from './Logo'

const Links: preact.FunctionComponent = () => {
	const socials = Object.values(Social)

	return (
		<>
			{socials.map(name => (
				<Link social={name} />
			))}
		</>
	)
}

export default Links
