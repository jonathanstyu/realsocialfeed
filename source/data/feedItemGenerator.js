import _ from 'lodash';
// import Sentencer from 'sentencer';
import faker from 'faker';

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

FeedItemGenerator.createFeedStories = (number=1, friends=[]) => {
  var items = []
  for (var i = 0; i < number; i++) {
    var poster;
    if (friends.length == 0) {
      poster = faker.fake("{{name.firstName}} {{name.lastName}}");
    } else {
      poster = friends[Math.floor((Math.random() * friends.length))].name;
    }

    items.push({
      'key': faker.random.uuid(),
      'body': faker.lorem.paragraph(),
      'headline': faker.lorem.sentence(),
      'image': 'https://dummyimage.com/300/',
      'poster': poster,
      "likes": faker.random.number(),
      "comments": faker.random.number(),
    })
  }

  return items;
}

FeedItemGenerator.createChatThreads = (number=1, friends=[]) => {
  var items = []
  for (var i = 0; i < friends.length; i++) {
    // Because we want to talk to everyone
    items.push({
      'key': faker.fake("{{random.uuid}}"),
      'chatSender': friends[i].name,
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

FeedItemGenerator.createEmails = (number=1, friends=[]) => {
  var items = []
  for (var i = 0; i < friends.length; i++) {
    items.push({
      'key': faker.fake("{{random.uuid}}"),
      'emailer': friends[i].name,
      'sent': faker.date.recent(),
      "emailSubjectLine": faker.lorem.sentence(),
      "emailBody": faker.lorem.paragraphs()
    })
  }

  return items;
}

FeedItemGenerator.createNotifications = (number=1, friends=[]) => {
  var items = []
  for (var i = 0; i < friends.length; i++) {
    // Because not everyone has a notification
    items.push({
      'key': faker.fake("{{random.uuid}}"),
      'about': friends[i].name,
      'notifiedDate': faker.date.recent(),
      "action": faker.lorem.sentence(),
    })
  }

  return items;
}
