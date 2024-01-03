module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    //roots: ['<rootDir>/src'],
    testMatch: ['<rootDir>/test/*.test.ts'],
    reporters: ['default', ['jest-junit', {outputDirectory:'reports'}]],
    
};