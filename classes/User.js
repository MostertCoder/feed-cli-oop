class User {
    constructor(userLine) {
        const userArr = userLine.split(process.env.USERS_DELIMITER);

        this.name = userArr[0].trim();

        if (userArr[1].length > 0) {
            this.following = userArr[1].trim().split(process.env.FOLLOWS_DELIMITER).map(followee => followee.trim());
        } else {
            this.following = [];
        }
    }

    static validateUserLine(line) {
        if (!line || line.length === 0) return false;
        if (line.indexOf(process.env.USERS_DELIMITER) === -1) return false;
        if (line.split(process.env.USERS_DELIMITER)[0].length === 0) return false;

        return true;
    }

    getName() {
        return this.name;
    }

    getFollowing() {
        return this.following;
    }

    hasFollower(name) {
        return this.following.includes(name);
    }

    mergeFollowing(newFollowers) {
        this.following = [...new Set([...this.getFollowing(), ...newFollowers])]
    }

    printName() {
        console.log(this.name);
    }
}

module.exports = User;