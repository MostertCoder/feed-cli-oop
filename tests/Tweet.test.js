require('dotenv').config();
const expect = require('chai').expect;

const Tweet = require('../classes/Tweet');

describe('Tweet Class', () => {
    describe('Validate Tweet Line', () => {
        it('should return true', () => {
            expect(Tweet.validateTweetLine('name> tweet line')).to.be.true;
        });

        it('should return false', () => {
            expect(Tweet.validateTweetLine('')).to.be.false;
        });

        it('should return false', () => {
            expect(Tweet.validateTweetLine('name tweet line')).to.be.false;
        });

        it('should return false', () => {
            expect(Tweet.validateTweetLine('>')).to.be.false;
        });

        it('should return false', () => {
            expect(Tweet.validateTweetLine('name> ywHzcgtUNEHh1S0wpn9XzgDacoCSSPjLCJfCBjsyK83QUgm2zdfW0464AMHSlCnnwfKrDYwGfcONDkVo01R1wlHXIQynEZUNkVnlLoB1H0XvsLiegnyuxPZzcZi3MYHFvdWuCjaZNqTdw40Wo9ejx4nZJ0agRKdBx2Cuw6sqlwyxHqbc0gN03pc6t04rpcrQ2LYatMeiuCmljLxQbM7Ywa6jE0EFA5OvBMRP4cIiqwOjp25CzOivL3zKsNJZtpfs0wQQwvByynuFov3bUI7lOv9QC')).to.be.false;
        });
    });

    describe('Get Name', () => {
        it('should return name', () => {
            const tweet = new Tweet('testname> tweet line');

            expect(tweet.getName()).to.be.a('string');
            expect(tweet.getName()).to.equal('testname');
        });
    });
});