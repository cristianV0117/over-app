import React from 'react';
import Router from 'next/router'

const control = (Component = null) => {

	class Control extends React.Component {

		state = {
			login: false,
			loading:false,
            API: process.env.API,
		    DOMAIN_API: process.env.DOMAIN_API
		}

		componentDidMount() {
			if (localStorage.getItem('s') != null || localStorage.getItem('s')) {
				Router.push("/dashboard")
			} else {
				this.setState({loading: true})
			}
		}
		

		render() {
			if (this.state.loading) {
				return (
					<Component props={{API: this.state.API, DOMAIN_API: this.state.DOMAIN_API}} />
				)
			} else {
				return <div />
			}
		}
	}

	return Control
}

export default control