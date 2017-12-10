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
  var imageTypes = ['svg', 'magic-eye-text', 'magic-eye-canvas']
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
//   var data = new Uint8Array([
//   137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,8,0,0,
//   0,8,8,2,0,0,0,75,109,41,220,0,0,0,34,73,68,65,84,8,215,99,120,
//   173,168,135,21,49,0,241,255,15,90,104,8,33,129,83,7,97,163,136,
//   214,129,93,2,43,2,0,181,31,90,179,225,252,176,37,0,0,0,0,73,69,
//   78,68,174,66,96,130]);
  // var blob = new Blob([data], { type: "image/png" });
  // var url = URL.createObjectURL(blob);
  // var img = new Image();
  // img.src = url;
  // return url;
  // var width = 320, height = 180;
  // var frameData = new Uint8Array(width * height * 4);
  // var i = 0;
  // while (i < frameData.length) {
  //   frameData[i++] = 0xFF; // red
  //   frameData[i++] = 0x00; // green
  //   frameData[i++] = 0x00; // blue
  //   frameData[i++] = 0xFF; // alpha - ignored in JPEGs
  // }
  // var rawImageData = {
  //   data: frameData,
  //   width: width,
  //   height: height
  // };
  // var jpegImageData = jpeg.encode(rawImageData, 50);
  // return jpegImageData;
// }
