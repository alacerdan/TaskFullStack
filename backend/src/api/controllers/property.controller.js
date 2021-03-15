const { convertCurreny, readFile } = require('../util');

'use strict';

// Path to data source

const dataPath = './db/data.json'

 // Read and convert data

const readExtractData = async path => {
    const result = await readFile(path)
    const json  = JSON.parse(result)
    const { properties, location } =  json

    return { properties, location }
 }
// Building object with the data of interest

 const buildObjResponse = location => {
    const { city } = location
    return ({
        id,
        type,
        address1,
        address2,
        name,
        properties,
        lowestPricePerNight,
        overview,
        overallRating,
        starRating,
        isFeatured
    }) => {
        // Handling data 
    
        let overall, numberOfRatings = 0
        if(overallRating){
            overall = overallRating.overall
            numberOfRatings = overallRating.numberOfRatings
        }
    
        overallRating = {value:overall, numberOfRatings}
    
        return {
            id,
            type,
            address1,
            address2,
            name,
            city,
            properties,
            lowestPricePerNight: convertCurreny(lowestPricePerNight),
            overview,
            overallRating,
            starRating,
            isFeatured
        }
    }
 }
 
 


module.exports = {
    async getAll(req, res) {

        const { properties, location } = await readExtractData(dataPath)

        const data =  properties.map(buildObjResponse(location))

        res.json(data)
    },
    async getById (req, res) {
        const { id } = req.params

        const { properties, location} = await readExtractData(dataPath)

        let data = properties.filter(item => item.id == id)

        data =  data ? data.map(buildObjResponse(location)): undefined

        res.json(data)
    }
}