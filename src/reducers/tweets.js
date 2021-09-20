export const RECIEVE_TWEETS = 'RECIEVE_TWEETS';

export const receiveTweets = (tweets) => {
    return {
        type: RECIEVE_TWEETS,
        tweets,
    }
}