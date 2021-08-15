const path = require('path');
const expect = require('chai').expect;

const FileHandler = require('../classes/FileHandler');

describe('File Handler Class', () => {
    describe('Does File Exist', () => {
        it('should return true', () => {
            expect(FileHandler.validateFile(path.join(__dirname, '..', 'tests', 'test-files', 'test.txt'))).to.be.true;
        });

        it('should throw an error', () => {
            expect(() => FileHandler.validateFile(path.join(__dirname, '..', 'tests', 'test-files', 'no-test.txt'))).to.throw();
        });
    });

    describe('Read File Lines', () => {
        before(() => {
            result = FileHandler.readFileLines(path.join(__dirname, '..', 'tests', 'test-files', 'test.txt'));
        });

        it('should return an array', () => {
            expect(result).to.be.a('array');
        });

        it('should equal ["line 1", "line 2", "line 3"]', () => {
            expect(result).to.deep.equal([
                'line 1',
                'line 2',
                'line 3'
            ]);
        });

        it('should throw an error', () => {
            expect(() => FileHandler.readFileLines(path.join(__dirname, '..', 'tests', 'test-files', 'test-empty.txt'))).to.throw();
        });
    });
});