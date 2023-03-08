export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  roots: ["<rootDir>/src"],
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.tsx",
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/main/**",
    "!**/*.protocols.ts",
    "!**/protocols/**",
  ],
};
