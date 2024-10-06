/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["./setupTests.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
};

export default config;
