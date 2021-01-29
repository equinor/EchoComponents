module.exports = {
    presets: [
        ['ts-jest', '@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-react',
        '@babel/preset-typescript'
    ]
};
