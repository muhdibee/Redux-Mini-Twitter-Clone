import { getInitialData } from '../utils/api';
import { receive_Users } from './users'
import { receiveTweets} from './tweets'
import { setAuthedUser } from './authedUser'

const AUTHED_USER = 'Tylermcginnis';

export const handleInitialData = () => {
    return (dispatch) => {
        return getInitialData()
            .then(({users, tweets }) => {
                dispatch(receive_Users(users));
                dispatch(receiveTweets(tweets));
                dispatch(setAuthedUser(AUTHED_USER))
            })
    }
}