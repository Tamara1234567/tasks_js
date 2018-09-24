import {isPermutation} from './index.js';

// const testStrings = {
//     [,]: false,
//     ['2345678','0987654e']: false,
//     ['123qwert','1q2w3tre']: true,
// };

test('check inique symbols', () => {
   //const strings = Object.keys(testStrings);
   //strings.map((arr) => {
       expect(isPermutation('qwertyuu','qwertyu')).toBe(false);
   //});
});

test('check inique symbols', () => {
    //const strings = Object.keys(testStrings);
    //strings.map((arr) => {
        expect(isPermutation('qwertyuu','qwertyu')).toBe(false);
    //});
 });