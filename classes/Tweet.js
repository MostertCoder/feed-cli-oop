class Tweet {
    constructor(tweetString) {
        const tweetArr = tweetString.split(process.env.TWEETS_DELIMITER);

        this.name = tweetArr[0].trim();
        this.tweet = tweetArr[1].trim();
    }

    static validateTweetLine(line) {
        if (line === null || line.length === 0) return false;
        if (line.indexOf(process.env.TWEETS_DELIMITER) === -1) return false;
        if (line.split(process.env.TWEETS_DELIMITER)[0].length === 0) return false;
        if (line.split(process.env.TWEETS_DELIMITER)[1].length > process.env.TWEET_MAX_LENGTH) return false;

        return true;
    }

    getName() {
        return this.name;
    }

    printTweet() {
        console.log(`\t@${this.name}: ${this.tweet}`);
    }
}

module.exports = Tweet;