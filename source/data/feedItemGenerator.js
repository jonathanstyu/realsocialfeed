import _ from 'lodash';
import faker from 'faker';
import TextGenerator from './textGenerator';

export default class FeedItemGenerator { }

// Used at the start of the app to make all your friends
FeedItemGenerator.makeFriends = (number = 10) => {
  var friends = [];
  for (var i = 0; i < number; i++) {
    friends.push({
      name: faker.fake("{{name.firstName}} {{name.lastName}}")
    });
  }

  return friends;
}

// Making the story for the items.
FeedItemGenerator.createFeedStories = (number=1, friends=[]) => {
  var items = []
  var imageTypes = ['svg', 'magic-eye-text', 'magic-eye-canvas'];
  for (var i = 0; i < number; i++) {
    var poster;
    if (friends.length == 0) {
      poster = faker.fake("{{name.firstName}} {{name.lastName}}");
    } else {
      poster = faker.random.arrayElement(friends).name;
    }

    items.push({
      'key': faker.random.uuid(),
      'body': TextGenerator.make({}, false),
      'headline': TextGenerator.make(),
      'loadingColor': faker.fake('rgba({{random.number(255)}}, {{random.number(255)}}, {{random.number(255)}}, 1.0)'),
      'imageType': faker.random.arrayElement(imageTypes),
      'poster': poster,
      'svgData': this.imageType == 'svg' ? FeedItemGenerator.createSVG() : null
    })
  }

  return items;
}

FeedItemGenerator.createSVG = () => {
  var numberItems = faker.random.number(10);
  for (var i = 0; i < numberItems; i++) {
    array[i]
  }
}
