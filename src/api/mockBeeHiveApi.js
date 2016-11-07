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
    supers: [
      {
        id: "my-first-super",
        title: "My First Super",
        superTypeId: "honey",
        frames: [
          {
            id: "my-first-frame",
            title: "My First Super",
            frameTypeId: "honey"
          },
          {
            id: "my-first-frame",
            title: "My First Super",
            frameTypeId: "honey"
          }
        ]
      },
      {
        id: "my-second-super",
        title: "My Second Super",
        superTypeId: "brood",
        frames: [
          {
            id: "my-first-frame",
            title: "My First Super",
            frameTypeId: "honey"

          },
          {
            id: "my-first-frame",
            title: "My First Super",
            frameTypeId: "honey"

          }
        ]
      }]

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
          [{id: "my-first-super", title: "My First Super", superTypeId: "honey", frames: [
                {id: "my-first-frame", title: "My First Frame", frameTypeId: "honey"},
                {id: "my-second-frame", title: "My Second Frame", frameTypeId: "honey"}]},
           {id: "my-second-super", title: "My Second Super", superTypeId: "brood", frames: [
                {id: "my-first-frame", title: "My First Frame", frameTypeId: "honey"},
                {id: "my-second-frame", title: "My Second Frame", frameTypeId: "honey"}]}
          ]
          beeHives.unshift(beeHive);
        }

        resolve(Object.assign({}, beeHive));
      }, delay);
    });
  }
  static saveSuperBox(beeHive, superBox) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minSuperBoxTitleLength = 1;
        if (superBox.title.length < minSuperBoxTitleLength) {
          reject(`Title must be at least ${minSuperBoxTitleLength} characters.`);
        }

        if (beeHive.id) {
          const existingBeeHiveIndex = beeHives.findIndex(a => a.id == beeHive.id);
          beeHives.splice(existingBeeHiveIndex, 1, beeHive);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new beeHives in a real
          //Cloning so copy returned is passed by value rather than by reference.
          console.log('you must add supers to a beehive');
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
