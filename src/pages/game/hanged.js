import auth from '../../core/auth'
import Hanged from "../../components/Game/Hanged";

const hanged = () => {
    return (
        <>
            <Hanged />
        </>
    )
}

export default auth(hanged)