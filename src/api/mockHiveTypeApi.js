import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const hiveTypes = [
  {
    id: 'langstroth-hive',
    hiveName: 'Langstroth Hive'
  },
  {
    id: 'horizontal-top-bar-hive',
    hiveName: 'Horizontal Top Bar Hive'
  },
  {
    id: 'warre-hive',
    hiveName: 'Warre Hive'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (hiveType) => {

  return hiveType.hiveName.replace(/\s+/g, '-').toLowerCase();

};

class HiveTypeApi {
  static getAllHiveTypes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], hiveTypes));
      }, delay);
    });
  }

  static saveHiveType(hiveType) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minHiveNameLength = 3;
        if (hiveType.hiveName.length < minHiveNameLength) {
          reject(`Hive type must be at least ${minHiveNameLength} characters.`);
        }

        if (hiveType.id) {
          const existingHiveTypeIndex = hiveTypes.findIndex(a => a.id == hiveType.id);
          hiveTypes.splice(existingHiveTypeIndex, 1, hiveType);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new hive types in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          hiveType.id = generateId(hiveType);
          hiveTypes.push(hiveType);
        }

        resolve(Object.assign({}, hiveType));
      }, delay);
    });
  }

  static deleteHiveType(hiveTypeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfHiveTypeToDelete = hiveTypes.findIndex(hiveType => {
          hiveType.hiveTypeId == hiveTypeId;
        });
        hiveTypes.splice(indexOfHiveTypeToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default HiveTypeApi;
