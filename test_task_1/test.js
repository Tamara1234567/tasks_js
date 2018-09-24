import {checkUniqueSymbols} from './index.js';
import {checkUniqueSymbolsSet} from './index.js';

const testStrings = {
    'qwertyuu': false,
    '123423534636': false,
    'rasdhjf': true,
};

test('check inique symbols', () => {
   const strings = Object.keys(testStrings);
   strings.map((string) => {
       expect(checkUniqueSymbols(string)).toBe(testStrings[string]);
   });
});

test('check inique symbols with set', () => {
    const strings = Object.keys(testStrings);
    strings.map((string) => {
        expect(checkUniqueSymbolsSet(string)).toBe(testStrings[string]);
    });
 });
 