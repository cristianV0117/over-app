import LoginForm from '../components/LoginForm'
import control from '../core/control'

const login = ({props}) => {
	return (
		<>
			<LoginForm props={props} />
		</>
	)
	
}

export default control(login)