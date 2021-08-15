class Feed {
    constructor(users, tweets) {
        this.users = users;
        this.tweets = tweets;
    }

    printFeed() {
        this.users.forEach(user => {
            user.printName();

            if (user.getFollowing().length > 0) {
                this.tweets.forEach(tweet => {
                    if (user.getName() === tweet.getName() || user.hasFollower(tweet.getName())) {
                        tweet.printTweet();
                    }
                });
            }

            console.log('\n');
        });
    }
}

module.exports = Feed;