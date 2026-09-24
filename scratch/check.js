const { translations } = require('../src/config/translations.js');
const en = translations.en;
const mr = translations.mr;

function compare(obj1, obj2, path = '') {
  for (const key in obj1) {
    const fullPath = path ? `${path}.${key}` : key;
    if (obj2[key] === undefined) {
      console.log(`Missing in mr: ${fullPath}`);
    } else if (Array.isArray(obj1[key])) {
      if (!Array.isArray(obj2[key])) {
        console.log(`Not an array in mr: ${fullPath}`);
      } else if (obj1[key].length !== obj2[key].length) {
        console.log(`Length mismatch in mr: ${fullPath} (en: ${obj1[key].length}, mr: ${obj2[key].length})`);
      }
    } else if (typeof obj1[key] === 'object' && obj1[key] !== null) {
      compare(obj1[key], obj2[key], fullPath);
    }
  }
}

compare(en, mr);
console.log("Check complete.");
