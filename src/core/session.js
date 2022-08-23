import Request from '../core/request'
const session = () => {
    Request("status", null, "GET", [
        process.env.API,
        process.env.DOMAIN_API,
        localStorage.getItem('token')
    ]).then(response => {
        if (response.error) {
            localStorage.removeItem('s')
        }
    })
}
export default session;