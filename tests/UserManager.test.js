const expect = require('chai').expect;

const UserManager = require('../classes/UserManager');
const User = require('../classes/User');

let userManager;

describe('User Manager Class', () => {
    describe('Get Users', () => {
        before(() => {
            const mochUserLines = [
                'name1 follows name2',
                'name2 follows name1',
                'name3 follows name1, name4',
            ];

            userManager = new UserManager(mochUserLines);
        });

        it('should return an array', () => {
            expect(userManager.getUsers()).to.be.a('array');
        });

        it('should have a length of 4', () => {
            expect(userManager.getUsers()).to.have.lengthOf(4);
        });

        it('should contain User objects', () => {
            userManager.getUsers().every(user => expect(user).to.be.an.instanceof(User));
        });
    });

    describe('Order Users', () => {
        before(() => {
            const mochUserLines = [
                'A follows b',
                'b follows A',
                'C follows A',
            ];

            userManager = new UserManager(mochUserLines);
        });

        it('should be sorted as A, b, C, D', () => {
            expect(userManager.getUsers()[0].getName()).to.equal('A');
            expect(userManager.getUsers()[1].getName()).to.equal('b');
            expect(userManager.getUsers()[2].getName()).to.equal('C');
        });
    });

    describe('Combine Duplicates', () => {
        before(() => {
            const mochUserLines = [
                'A follows B, C',
                'C follows A, D',
                'C follows A, B',
            ];

            userManager = new UserManager(mochUserLines);
        });

        it('should contain 4 elements', () => {
            expect(userManager.getUsers()).to.have.lengthOf(4);
        });

        it('should contain only unique users', () => {
            expect(userManager.getUsers()[0].getName()).to.equal('A');
            expect(userManager.getUsers()[1].getName()).to.equal('B');
            expect(userManager.getUsers()[2].getName()).to.equal('C');
            expect(userManager.getUsers()[3].getName()).to.equal('D');
        });

        it('should contain only unique following', () => {
            expect(userManager.getUsers()[0].getFollowing()).to.deep.equal(['B', 'C']);
            expect(userManager.getUsers()[1].getFollowing()).to.deep.equal([]);
            expect(userManager.getUsers()[2].getFollowing()).to.deep.equal(['A', 'D', 'B']);
            expect(userManager.getUsers()[3].getFollowing()).to.deep.equal([]);
        });
    });
});