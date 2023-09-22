const films = require('../data/films.json')

module.exports = {
    list: async () => {
        return films;
    },

    create: async () => {
        throw Error('Not implemented')
    }
};