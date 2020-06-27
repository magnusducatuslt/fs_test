const fs = require("fs");
const writeJSON = async (path, data) => {
  try {
    const isObj = data instanceof Object;
    if (isObj) {
      fs.writeFileSync(path, JSON.stringify(data));
    } else {
      throw new Error();
    }
  } catch (e) {
    throw new Error("Invalid Data");
  }
};

const createDirectoryIfNotExists = async (targetDir) => {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  return targetDir;
};

module.exports = {
  // Do not modify the names of the exports
  writeJSON: writeJSON,
  createDirectoryIfNotExists: createDirectoryIfNotExists,
};
