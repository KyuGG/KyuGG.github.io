import Link from './Link'
import { Social } from './Logo'

const Links: preact.FunctionComponent = () => {
	return (
		<>
			<Link social={Social.GitHub} />
			<Link social={Social.Steam} />
		</>
	)
}

export default Links
