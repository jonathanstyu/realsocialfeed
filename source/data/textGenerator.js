import _ from 'lodash';
import faker from 'faker';
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive';

export default class TextGenerator {
  constructor(state={}) {
    this.state = state;
  }
}

TextGenerator.make = (corpus={}, headline=true) => {
  try {
    if (_.isEmpty(corpus)) {
      corpus = require('./corpus/headlines.json');
      var length = faker.random.number(12);
    }

    if (!headline) {
      corpus = require('./corpus/bodies.json')
      var length = faker.random.number(40);
    }

    var headline = [];

    // Populate with the first element
    headline.push(faker.random.arrayElement(corpus['*<begin>']))
    for (var i = 1; i < length; i++) {
      var index = headline[i-1];
      var pool = corpus[index];
      if (typeof pool == 'undefined' || pool.length < 2) {
        pool = faker.random.objectElement(corpus)
      }
      headline.push(faker.random.arrayElement(pool));
    }
    headline.push(faker.random.arrayElement(corpus['*<end>']))
    return headline.join(" ");

  } catch (e) {
    console.log(e);
    return headline.join(" ")
  }

}

TextGenerator.makeBody = () => {
  return ""
}
