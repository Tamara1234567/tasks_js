import {simpleCompressionOfStr} from './index.js';

const testStrings = {
    '11224455667788994':'1222435262728292',
    'ejnkgjsfldfjnlsfvjnla sdklsdfjnkl': 'e1j5n4k3g1s4f4l5d3v1a1',
    'alaldkdkfjfjgtr': 'alaldkdkfjfjgtr',
};

test('Siple compression of string', () => {
   const strings = Object.keys(testStrings);
   strings.map((string) => {
       expect(simpleCompressionOfStr(string)).toBe(testStrings[string]);
   });
});

