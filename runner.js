const fs = require('fs');

class Runner {
    constructor() {
        this.files = [];
    }

   async collectFiles(targetPath) {
    // targetPath === /Users/sarahrocco/Documents/projects/...
    const files = await fs.promises.readdir(targetPath);

    return files;
    }
}

module.exports = Runner;