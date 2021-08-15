const expect = require('chai').expect;

const TweetManager = require('../classes/TweetManager');
const Tweet = require('../classes/Tweet');

let tweetManager;

describe('Tweet Manager Class', () => {
    describe('Get Tweets', () => {
        before(() => {
            const mochTweetLines = [
                'name1> tweet text 1',
                'name2> tweet text 2',
                'name3> tweet text 3',
            ];

            tweetManager = new TweetManager(mochTweetLines);
        });

        it('should return an array', () => {
            expect(tweetManager.getTweets()).to.be.a('array');
        });

        it('should have a length of 3', () => {
            expect(tweetManager.getTweets()).to.have.lengthOf(3);
        });

        it('should contain Tweet objects', () => {
            tweetManager.getTweets().every(tweet => expect(tweet).to.be.an.instanceof(Tweet));
        });
    });
});