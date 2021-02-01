module.exports = {
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
        '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.ts'
    },
    preset: 'ts-jest',
    coveragePathIgnorePatterns: ['src/types/*', 'src/index.ts', 'src/typings/*'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/node_modules/'],
    coverageThreshold: {
        global: {
            lines: 90,
            statements: 90
        }
    },
    transform: {
        '^.+\\.(j|t)sx?$': 'ts-jest'
    }
};
