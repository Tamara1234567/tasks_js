import {changeSpaceForCharacter} from './index.js';

const testStrings = {
    'qwe rtyuu': 'qwe%20rtyuu',
    '123 4235 34636': '123%204235%2034636',
    'ra    sdhjf': 'ra%20%20%20%20sdhjf',
};

test('change spase fo character', () => {
   const strings = Object.keys(testStrings);
   strings.map((string) => {
       expect(changeSpaceForCharacter(string)).toBe(testStrings[string]);
   });
});

