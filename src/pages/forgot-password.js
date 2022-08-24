import ForgotPassword from "../components/ForgotPassword/ForgotPassword";

const forgotPassword = () => {
    return <ForgotPassword
        props={{
            API: process.env.API,
            DOMAIN_API: process.env.DOMAIN_API
        }}
    />
}
export default forgotPassword