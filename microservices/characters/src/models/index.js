const characters = require('../data/characters.json')

module.exports = {
    list: async () => {
        return characters;
    },

    create: async () => {
        throw Error('Not implemented')
    }
};