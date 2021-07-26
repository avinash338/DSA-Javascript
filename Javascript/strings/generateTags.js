const generateTagsfn = (openingTag, closingTag, prefix, tag) => {
  if (openingTag > 0) {
    const newPrefix = prefix + `<${tag}>`;
    return generateTagsfn(openingTag - 1, closingTag, newPrefix, tag);
  } else if (openingTag < closingTag) {
    const newPrefix = prefix + `</${tag}>`;
    return generateTagsfn(openingTag, closingTag - 1, newPrefix, tag);
  } else if (openingTag === closingTag) {
    return prefix;
  }
};

/**
 * @description             This method generates the html tags 
 * @param {*} numberOfTags  Number of tags
 * @param {*} tag           Tag type
 */
const generateTags = (numberOfTags, tag) => {
  return generateTagsfn(numberOfTags, numberOfTags, "", tag);
};

console.log(generateTags(3, "h1")); //<h1><h1><h1></h1></h1></h1>
console.log(generateTags(3, "div")); //<div><div><div></div></div></div>
