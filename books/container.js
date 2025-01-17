const { createContainer, asClass, asFunction, asValue } = require("awilix");

const container = createContainer();

// Register your dependencies
container.register({
  userService: asClass(require("./booksServices")).singleton(),
  userRepository: asClass(require("./booksRepositories")).singleton(),
});

module.exports = container;
