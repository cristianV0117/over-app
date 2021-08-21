import React from 'react';
import Router from 'next/router'

const auth = (Component = null) => {

	class Auth extends React.Component {

		state = {
			login: false,
			loading:false
		}

		componentDidMount() {
			if (localStorage.getItem('s') == null || !localStorage.getItem('s')) {
				Router.push("/login")
			} else {
				this.setState({loading: true})
			}
		}
		

		render() {
			if (this.state.loading) {
				return (
					<Component />
				)
			} else {
				return <div />
			}
		}
	}

	return Auth
}

export default auth