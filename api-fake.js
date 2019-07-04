module.exports = function() {
  let _ = require('lodash');
  let faker = require('faker');

  return {
    persons : _.times(100, (num) => {
      return {
        id : num,
        name: {
          firstname: faker.name.firstName(),
          name: faker.name.lastName(),
        },
        salary: faker.random.number(5000, 20000),
      };
    }),
    animals : _.times(50, (num) => {
      return {
        id : num,
        name : faker.name.findName(),
        species : faker.company.catchPhraseNoun(),
        gender:  faker.helpers.randomize(['m', 'f']),
        age : faker.random.number(100),
      };
    }),
  };
}
