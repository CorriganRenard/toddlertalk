import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const quotes = [
    'Sophie: I wanna cuddle my moon.',
    'Jade: I wanna new bananie',
    'Sophie: There are 6 moons'
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

class QuotesApi {
  static getAllQuotes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], quotes));
      }, delay);
    });
  }


  static saveQuote(quote) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minQuoteLength = 1;
        if (quote.length < minQuoteLength) {
          reject(`Quote must be at least ${minQuoteLength} characters.`);
        }
        quotes.unshift(quote);
        resolve(Object.assign({}, quote));
      }, delay);
    });
  }
}
export default QuotesApi;
