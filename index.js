require('dotenv').config();
const path = require('path');

const FileHandler = require('./classes/FileHandler');
const UserManager = require('./classes/UserManager');
const TweetManager = require('./classes/TweetManager');
const Feed = require('./classes/Feed');

try {
    const userManager = new UserManager(FileHandler.readFileLines(path.join(__dirname, '.', 'data-files', process.env.USERS_FILE_NAME)));
    const tweetManager = new TweetManager(FileHandler.readFileLines(path.join(__dirname, '.', 'data-files', process.env.TWEETS_FILE_NAME)));

    const feed = new Feed(userManager.getUsers(), tweetManager.getTweets());
    feed.printFeed();
} catch (error) {
    console.log(error);
}