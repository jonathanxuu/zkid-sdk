const config = require('@zcloak/dev/config/jest.cjs');

module.exports = {
  ...config,
  moduleNameMapper: {
    '@zcloak/crypto(.*)$': '<rootDir>/packages/crypto/src/$1',
    '@zcloak/did-resolver(.*)$': '<rootDir>/packages/did-resolver/src/$1',
    '@zcloak/did(.*)$': '<rootDir>/packages/did/src/$1',
    '@zcloak/keyring(.*)$': '<rootDir>/packages/keyring/src/$1'
  },
  testTimeout: 30000
};
