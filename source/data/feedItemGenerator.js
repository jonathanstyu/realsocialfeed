import _ from 'lodash';
// import Sentencer from 'sentencer';
import faker from 'faker';

export default class FeedItemGenerator { }

FeedItemGenerator.createFeedStories = (number=1) => {
  var items = []
  for (var i = 0; i < number; i++) {
    items.push({
      'key': faker.fake("{{random.uuid}}"),
      'body': faker.fake("{{lorem.paragraph}}"),
      'headline': faker.fake("{{lorem.sentence}}"),
      'image': faker.fake("{{image.image}}"),
      'poster': faker.fake("{{name.firstName}} {{name.lastName}}")
    })
  }

  return items;
}

FeedItemGenerator.createChatThreads = (number=1) => {
  var items = []
  for (var i = 0; i < number; i++) {
    items.push({
      'key': faker.fake("{{random.uuid}}"),
      'chatSender': faker.fake("{{name.firstName}} {{name.lastName}}"),
      'lastsent': faker.date.recent()
    })
  }

  return items;
}

FeedItemGenerator.createChat = (sender, number=1) => {
  var items = [];
  for (var i = 0; i < number; i++) {
    items.push({
      _id: faker.random.uuid(),
      text: faker.lorem.sentence(),
      createdAt: faker.date.recent(),
      user: {
        name: sender
      }
    })
  }
  return items;
}
