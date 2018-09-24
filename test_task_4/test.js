import {reshuffLineToPollinom} from './index.js';

const testStrings = {
    '11224455667788994':true,
    'ejnkgjsfldfjnlsfvjnla sdklsdfjnkl': false,
    'alaldkdkfjfjgtr': false,
};

test('Shuff to pillinom ', () => {
   const strings = Object.keys(testStrings);
   strings.map((string) => {
       expect(reshuffLineToPollinom(string)).toBe(testStrings[string]);
   });
});

