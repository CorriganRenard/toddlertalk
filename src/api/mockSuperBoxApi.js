/*
import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const superBoxes = [
  {
    id: "box-1",
    title: "Box 1",
    superBoxType: "Honey",
    honey: true,
    brood: false,
    mixed: false,
    empty: false,
    numframes: "4"


  }
];

function getCurrentDate() {

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0!
  let yyyy = today.getFullYear();

  /!*if(dd<10) {
   dd='0'+dd
   }

   if(mm<10) {
   mm='0'+mm
   }*!/

  today = mm+'/'+dd+'/'+yyyy;
  return today;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (superBox) => {
  return replaceAll(superBox.title, ' ', '-');
};

class SuperBoxApi {
  static getAllSuperBoxes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], superBoxes));
      }, delay);
    });
  }

  static saveSuperBox(superBox) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minSuperBoxTitleLength = 1;
        if (superBox.title.length < minSuperBoxTitleLength) {
          reject(`Title must be at least ${minSuperBoxTitleLength} characters.`);
        }

        if (superBox.id) {
          const existingSuperBoxIndex = superBoxes.findIndex(a => a.id == superBox.id);
          superBoxes.splice(existingSuperBoxIndex, 1, superBox);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new beeHives in a real
          //Cloning so copy returned is passed by value rather than by reference.
          superBox.id = generateId(superBox);
          superBox.watchHref = `http://www.pluralsight.com/courses/${superBox.id}`;
          /!*    beeHive.typeDiagramRef = ''*!/
          superBoxes.unshift(superBox);
        }

        resolve(Object.assign({}, superBox));
      }, delay);
    });
  }

  /!*static deleteSuperBox(superBoxId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfSuperBoxToDelete = superBox.findIndex(superBox => {
          superBox.superBoxId == superBoxId;
        });
        superBox.splice(indexOfSuperBoxToDelete, 1);
        resolve();
      }, delay);
    });
  }*!/
}

export default SuperBoxApi;
*/
