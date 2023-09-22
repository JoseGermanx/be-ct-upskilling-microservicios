const planets = require('../data/planets.json')

module.exports = {
    list: async () => {
        return planets;
    },

    create: async () => {
        throw Error('Not implemented')
    }
};