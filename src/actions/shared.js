import { getInitailData } from '..utils/api';
import { receiveUsers } from '.. actions/users'
import { receiveTweets} from '.. actions/tweets'
import { setAuthedUser } from '.. actions/authedUser'

const AUTHED_USER = 'Tylermcginnis';

export const handleInitialData = () => {
    return (dispatch) => {
        return getInitailData()
            .then(({users, tweets }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets));
                dispatch(setAuthedUser(AUTHED_USER))
            })
    }
}