const request = (endPoint, data, type, auth) => {
	if (type === 'GET') {
		return fetch(auth[1] + endPoint, {
			method: type,
			headers: {
				'Authorization': auth[0],
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authentication': auth[2]
			}
		}).then(json => {
			return json.json()
		})
	}

	if (type === 'POST') {
		return fetch(auth[1] + endPoint, {
			method: type,
			headers: {
				'Authorization': auth[0],
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(json => {
			return json.json()
		})
	}
}

export default request