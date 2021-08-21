import LoginForm from '../components/LoginForm'

const login = (props) => {
	return (
		<>
			<LoginForm props={props} />
		</>
	)
	
}

export default login

login.getInitialProps = async ctx => {
	return {
		API: process.env.API,
		DOMAIN_API: process.env.DOMAIN_API
	}
}