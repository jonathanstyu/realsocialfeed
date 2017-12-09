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

// Making the story for the items.
FeedItemGenerator.createFeedStories = (number=1, friends=[]) => {
  var items = []
  var imageTypes = ['pic', 'svg', 'magic-eye']
  for (var i = 0; i < number; i++) {
    var poster;
    if (friends.length == 0) {
      poster = faker.fake("{{name.firstName}} {{name.lastName}}");
    } else {
      poster = faker.random.arrayElement(friends).name;
    }

    items.push({
      'key': faker.random.uuid(),
      'body': faker.lorem.paragraph(),
      'headline': faker.lorem.sentence(),
      'loadingColor': faker.fake('rgba({{random.number(255)}}, {{random.number(255)}}, {{random.number(255)}}, 1.0)'),
      'image': "https://lorempixel.com/400/300",
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


// Not exposed to public.
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

// Responding all!
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

// Mails
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
  for (var i = 0; i < number; i++) {
    // Because not everyone has a notification
    items.push({
      'key': faker.fake("{{random.uuid}}"),
      'about': faker.random.arrayElement(friends).name,
      'notifiedDate': faker.date.recent(),
      "action": faker.lorem.sentence(),
    })
  }

  return items;
}

// Create a random image. Fail.
// FeedItemGenerator.createImage = () => {
//   var width = 320, height = 180;
//   console.log(Buffer);
//   var frameData = new Buffer(width * height * 4);
//   var i = 0;
//   while (i < frameData.length) {
//     frameData[i++] = 0xFF; // red
//     frameData[i++] = 0x00; // green
//     frameData[i++] = 0x00; // blue
//     frameData[i++] = 0xFF; // alpha - ignored in JPEGs
//   }
//   var rawImageData = {
//     data: frameData,
//     width: width,
//     height: height
//   };
//   var jpegImageData = jpeg.encode(rawImageData, 50);
//   return jpegImageData;
// }
