import _ from 'lodash';
import faker from 'faker';

export default class TextGenerator {
  constructor(state={}) {
    this.state = state;
  }
}

TextGenerator.makeHeadline = () => {
  return "This is the end"
}

TextGenerator.makeBody = () => {
  return ""
}
