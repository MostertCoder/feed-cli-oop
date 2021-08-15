const Tweet = require('./Tweet');

class TweetManager {
    constructor(tweetLines) {
        this.tweets = tweetLines.filter((line) => Tweet.validateTweetLine(line)).map(line => {
            return new Tweet(line);
        });
    }

    getTweets() {
        return this.tweets;
    }
}

module.exports = TweetManager;