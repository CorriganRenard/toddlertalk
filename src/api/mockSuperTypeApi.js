import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const superTypes = [
  {
    id: 'honey',
    superName: 'Honey'
  },
  {
    id: 'brood',
    superName: 'Brood'
  },
  {
    id: 'mixed',
    superName: 'Mixed'
  },
  {
    id: 'empty',
    superName: 'Empty'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (superType) => {

  return superType.superName.replace(/\s+/g, '-').toLowerCase();

};

class SuperTypeApi {
  static getAllSuperTypes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], superTypes));
      }, delay);
    });
  }

  static saveSuperType(superType) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minSuperNameLength = 3;
        if (superType.superName.length < minSuperNameLength) {
          reject(`Super type must be at least ${minSuperNameLength} characters.`);
        }

        if (superType.id) {
          const existingSuperTypeIndex = superTypes.findIndex(a => a.id == superType.id);
          superTypes.splice(existingSuperTypeIndex, 1, superType);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new super types in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          superType.id = generateId(superType);
          superTypes.push(superType);
        }

        resolve(Object.assign({}, superType));
      }, delay);
    });
  }

  static deleteSuperType(superTypeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfSuperTypeToDelete = superTypes.findIndex(superType => {
          superType.superTypeId == superTypeId;
        });
        superTypes.splice(indexOfSuperTypeToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default SuperTypeApi;
