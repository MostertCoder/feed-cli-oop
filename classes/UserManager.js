const User = require('./User');

class UserManager {
    constructor(userLines) {
        this.users = userLines.filter(line => User.validateUserLine(line)).map(line => {
            return new User(line);
        });

        this.users = this.combineDuplicates(this.users);
        this.users = this.sortUsers(this.users);
    }

    combineDuplicates(users) {
        const uniqueUsers = [];

        users.forEach(user => {
            if (uniqueUsers.some(uniqueUser => uniqueUser.getName() === user.getName())) {
                uniqueUsers[uniqueUsers.findIndex(e => e.getName() === user.getName())].mergeFollowing(user.getFollowing());
            } else {
                uniqueUsers.push(user);
            }

            user.getFollowing().forEach(follower => {
                if (!uniqueUsers.some(u => u.getName() === follower)) {
                    uniqueUsers.push(new User(`${follower} follows`));
                }
            });
        });

        return uniqueUsers;
    }

    sortUsers(users) {
        return [...users].sort((userA, userB) => {
            const nameA = userA.getName().toUpperCase();
            const nameB = userB.getName().toUpperCase();

            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
    }

    getUsers() {
        return this.users;
    }
}

module.exports = UserManager;