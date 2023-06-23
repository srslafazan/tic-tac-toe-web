import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run

  testEnvironment: "jest-environment-jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest/setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/playwright-report/",
    "<rootDir>/test-results/",
    "<rootDir>/out/",
    "<rootDir>/coverage/",
    "<rootDir>/playwright/",
  ],

  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/pages/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/components/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/hooks/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/**/*.spec.{js,jsx,ts,tsx}",
    "!<rootDir>/**/*.test.{js,jsx,ts,tsx}",
  ],
  coverageDirectory: "jest-coverage",

  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "jest-reports",
        outputName: "jest-junit.xml",
      },
    ],
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
