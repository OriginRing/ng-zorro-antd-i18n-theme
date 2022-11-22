const zhJson = require('./zh.json');
const fs = require('fs');
const languages = ['en', 'zh'];
const baseTranslation = sortObjectKeys(zhJson.translations);
languages.forEach(language => {
  let translation;
  try {
    translation = require(`./${language}.json`).translations;
    Object.keys(translation).forEach(t => (translation[t] = translation[t].trim()));
  } catch (e) {
    translation = {};
  }
  const mergeJson = {
    locale: language,
    translations: {
      ...baseTranslation,
      ...translation
    }
  };
  fs.writeFileSync(`./src/locale/${language}.json`, JSON.stringify(mergeJson, null, 2));
});

function sortObjectKeys(obj) {
  return Object.keys(obj)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: obj[key]
      }),
      {}
    );
}
