module.exports = {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!@testing-library)"
    ],
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"]
  };