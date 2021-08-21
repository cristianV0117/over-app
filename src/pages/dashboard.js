import auth from '../core/auth'


const dashboard = () => {
	return (
		<>
			<h1>HOLA MUNDO AUTH</h1>
		</>
	)
}

export default auth(dashboard)