module.exports = {
  "preset": 'ts-jest',
  "testEnvironment": 'node',
  "roots": [
    "<rootDir>/"
  ],
  "transform": {
    "^.+\\.ts?$": "ts-jest"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/src/**",
    "!**/tests/**.{js,ts}",
    "!**/node_modules/**",
    "!**/dist/**"
  ],
  "coveragePathIgnorePatterns": [
    "!*.d.ts"
  ],
  "automock": false
}