const fs = require("fs");

class FileHandler {
    static validateFile(filePath) {
        if (fs.existsSync(filePath)) {
            return true;
        } else {
            throw new Error(`File not found: ${filePath}`);
        }
    }

    static readFileLines(filePath) {
        this.validateFile(filePath);

        const data = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');

        if (data.length > 0) {
            return data.split('\n');
        } else {
            throw new Error(`File empty: ${filePath}`);
        }
    }
}

module.exports = FileHandler;