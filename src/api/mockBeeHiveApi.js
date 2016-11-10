import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const beeHives = [
  {
    id: "my-first-hive",
    title: "My First Hive",

    hiveTypeId: "langstroth-hive",
   /* TypeDiagramRef: ""*/
    birthdate: getCurrentDate(),
    numsupers: "2",
    supers:
      [{id: "super01", title: "My First Super", superTypeId: "honey", frames: [
        {id: "super01-frame01", title: "My First Frame", frameTypeId: "honey"},
        {id: "super01-frame02", title: "My Second Frame", frameTypeId: "honey"},
        {id: "super01-frame03", title: "My First Frame", frameTypeId: "honey"},
        {id: "super01-frame04", title: "My Second Frame", frameTypeId: "honey"},
        {id: "super01-frame05", title: "My First Frame", frameTypeId: "honey"},
        {id: "super01-frame06", title: "My Second Frame", frameTypeId: "honey"},
        {id: "super01-frame07", title: "My First Frame", frameTypeId: "honey"},
        {id: "super01-frame08", title: "My Second Frame", frameTypeId: "honey"},
        {id: "super01-frame09", title: "My First Frame", frameTypeId: "honey"},
        {id: "super01-frame10", title: "My Second Frame", frameTypeId: "honey"},
        {id: "super01-frame11", title: "My First Frame", frameTypeId: "honey"},
        {id: "super01-frame12", title: "My Second Frame", frameTypeId: "honey"}]},
      {id: "super02", title: "My Second Super", superTypeId: "brood", frames: [
        {id: "super02-frame01", title: "My First Frame", frameTypeId: "honey"},
        {id: "super02-frame02", title: "My Second Frame", frameTypeId: "honey"},
        {id: "super02-frame03", title: "My First Frame", frameTypeId: "honey"},
        {id: "super02-frame04", title: "My Second Frame", frameTypeId: "honey"},
        {id: "super02-frame05", title: "My First Frame", frameTypeId: "honey"},
        {id: "super02-frame06", title: "My Second Frame", frameTypeId: "honey"},
        {id: "super02-frame07", title: "My First Frame", frameTypeId: "honey"},
        {id: "super02-frame08", title: "My Second Frame", frameTypeId: "honey"},
        {id: "super02-frame09", title: "My First Frame", frameTypeId: "honey"},
        {id: "super02-frame10", title: "My Second Frame", frameTypeId: "honey"},
        {id: "super02-frame11", title: "My First Frame", frameTypeId: "honey"},
        {id: "super02-frame12", title: "My Second Frame", frameTypeId: "honey"}]}
    ]
  }
];

function getCurrentDate() {

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0!
  let yyyy = today.getFullYear();
  today = mm+'/'+dd+'/'+yyyy;
  return today;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (beeHive) => {
  return replaceAll(beeHive.title, ' ', '-');
};

const generateSuperId = (superBox) => {
  return replaceAll(superBox.title, ' ', '-');
};


class BeeHiveApi {
  static getAllBeeHives() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], beeHives));
      }, delay);
    });
  }

  static getAllSupers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], beeHives.supers));
      }, delay);
    });
  }

  static saveBeeHive(beeHive) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minBeeHiveTitleLength = 1;
        if (beeHive.title.length < minBeeHiveTitleLength) {
          reject(`Title must be at least ${minBeeHiveTitleLength} characters.`);
        }

        if (beeHive.id) {
          const existingBeeHiveIndex = beeHives.findIndex(a => a.id == beeHive.id);
          beeHives.splice(existingBeeHiveIndex, 1, beeHive);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new beeHives in a real
          //Cloning so copy returned is passed by value rather than by reference.
          beeHive.id = generateId(beeHive);
          beeHive.supers =
              [{id: "super01", title: "My First Super", superTypeId: "honey", frames: [
                  {id: "super01-frame01", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super01-frame02", title: "My Second Frame", frameTypeId: "honey"},
                  {id: "super01-frame03", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super01-frame04", title: "My Second Frame", frameTypeId: "honey"},
                  {id: "super01-frame05", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super01-frame06", title: "My Second Frame", frameTypeId: "honey"},
                  {id: "super01-frame07", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super01-frame08", title: "My Second Frame", frameTypeId: "honey"},
                  {id: "super01-frame09", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super01-frame10", title: "My Second Frame", frameTypeId: "honey"},
                  {id: "super01-frame11", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super01-frame12", title: "My Second Frame", frameTypeId: "honey"}]},
              {id: "super02", title: "My Second Super", superTypeId: "brood", frames: [
                  {id: "super02-frame01", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super02-frame02", title: "My Second Frame", frameTypeId: "honey"},
                  {id: "super02-frame03", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super02-frame04", title: "My Second Frame", frameTypeId: "honey"},
                  {id: "super02-frame05", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super02-frame06", title: "My Second Frame", frameTypeId: "honey"},
                  {id: "super02-frame07", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super02-frame08", title: "My Second Frame", frameTypeId: "honey"},
                  {id: "super02-frame09", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super02-frame10", title: "My Second Frame", frameTypeId: "honey"},
                  {id: "super02-frame11", title: "My First Frame", frameTypeId: "honey"},
                  {id: "super02-frame12", title: "My Second Frame", frameTypeId: "honey"}]}];
          beeHives.unshift(beeHive);
        }

        resolve(Object.assign({}, beeHive));
      }, delay);
    });
  }
  static saveSuperBox(beeHive) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate server-side validation
      const minBeeHiveTitleLength = 1;
      if (beeHive.title.length < minBeeHiveTitleLength) {
        reject(`Title must be at least ${minBeeHiveTitleLength} characters.`);
      }

      if (beeHive.id) {
        const existingBeeHiveIndex = beeHives.findIndex(a => a.id == beeHive.id);
        beeHives.splice(existingBeeHiveIndex, 1, beeHive);
      } else {
      console.log('no beehive.id received');
      }

        resolve(Object.assign({}, beeHive));
      }, delay);
    });
  }

  static deleteBeeHive(beeHiveId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfBeeHiveToDelete = beeHives.findIndex(beeHive => {
          beeHive.beeHiveId == beeHiveId;
        });
        beeHives.splice(indexOfBeeHiveToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BeeHiveApi;
