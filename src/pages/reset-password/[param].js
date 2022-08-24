import { useRouter } from 'next/router'
import ResetPassword from "../../components/ForgotPassword/ResetPassword";

const resetPassword = () => {
    const router = useRouter()
    const { param } = router.query

    return <ResetPassword props={{
        API: process.env.API,
        DOMAIN_API: process.env.DOMAIN_API,
        EMAIL: Buffer.from(param, 'base64').toString()
    }} />
}

export default resetPassword