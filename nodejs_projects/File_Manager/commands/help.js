function help() {
    console.log(`
        Commands available:
            1. node main.js tree "dirPath".
            2. node main.js organize "dirPath".
            3. node main.js help
    `);
}

module.exports = {
    helpKey : help
}