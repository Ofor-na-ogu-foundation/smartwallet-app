module.exports = {
  "setupFilesAfterEnv": ["./init.js"],
  "testEnvironment": "node",
  "reporters": ["detox/runners/jest/streamlineReporter"],
  "verbose": true
}
