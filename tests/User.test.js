require('dotenv').config();
const expect = require('chai').expect;

const User = require('../classes/User');

describe('User Class', () => {
    describe('Validate User Line', () => {
        it('should return true', () => {
            expect(User.validateUserLine('name follows name1, name2')).to.be.true;
        });

        it('should return false', () => {
            expect(User.validateUserLine('')).to.be.false;
        });

        it('should return false', () => {
            expect(User.validateUserLine('name name1, name 2')).to.be.false;
        });

        it('should return false', () => {
            expect(User.validateUserLine('follows')).to.be.false;
        });
    });

    describe('Get Name', () => {
        it('should return name', () => {
            const user = new User('testname follows name1, name2');

            expect(user.getName()).to.be.a('string');
            expect(user.getName()).to.equal('testname');
        });
    });

    describe('Get Following', () => {
        it('should return following', () => {
            const user = new User('testname follows name1, name2');

            expect(user.getFollowing()).to.be.a('array');
            expect(user.getFollowing()).to.deep.equal(['name1', 'name2']);
        });
    });

    describe('Has Follower', () => {
        it('should return true', () => {
            const user = new User('testname follows name1, name2');

            expect(user.hasFollower('name1')).to.be.true;
        });

        it('should return false', () => {
            const user = new User('testname follows name1, name2');

            expect(user.hasFollower('no-name')).to.be.false;
        });
    });

    describe('Merge Following', () => {
        it('should return a merged array', () => {
            const user = new User('testname follows name1, name2');
            const newFollowers = ['name3', 'name4'];

            user.mergeFollowing(newFollowers);

            expect(user.getFollowing()).to.deep.equal(['name1', 'name2', 'name3', 'name4']);
        });
    });
});