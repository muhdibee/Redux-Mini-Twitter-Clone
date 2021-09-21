import { _saveLikeToggle } from "../utils/_DATA";
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';


export const receiveTweets = (tweets) => {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

function toggleTweet ({id, authedUser, hasLiked}) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked,
    }

}

export function handleToggleTweet(info) {
    return (dispatch) => {
        dispatch(toggleTweet(info))

        return _saveLikeToggle(info)
        .catch((e) => {
            console.warn('Error in handleToggleTweet: ', e)
            dispatch(toggleTweet(info))
            alert('There was an error liking the tweet. Try again.')
        })
    }
}