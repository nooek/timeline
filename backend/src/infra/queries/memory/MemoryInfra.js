const MemoryS = require("../../models/MemoryModel");
const groupByDate = require("../../utils/memories/groupByDate");

class MemoryInfra {
    async create(memoryInfo) {
        try {
            const newMemory = new MemoryS(memoryInfo)
            await newMemory.save();
            return true
        } catch (err) {
            console.log("DATABASE ERROR: " + err)
            return false
        }
    }

    async getByDate(info) {
        try {
            const query = []
            const datesToSearch = []

            if (info.day) datesToSearch.push({"$expr": { "$in": [{ "$dayOfMonth": "$date" }, [parseInt(info.day)]] }})
            if (info.month) datesToSearch.push({"$expr": { "$in": [{ "$month": "$date" }, [parseInt(info.month)]] }})
            if (info.year) datesToSearch.push({"$expr": { "$in": [{ "$year": "$date" }, [parseInt(info.year)]] }})
            if (info.email) {
                query.push({"$and": [...datesToSearch, {"$expr": { "$eq": ["$owner", info.email] }}]})
            } else {
                query.push({"$and": [...datesToSearch]})
            }

            const memoriesFound = await MemoryS.find(...query)

            const memoriesSet = groupByDate(memoriesFound)

            if (memoriesFound.length) {
                return {
                    found: true,
                    memories: memoriesSet
                }
            } else {
                return {
                    found: false,
                    message: "No memories found"
                }
            }
        } catch(err) {
            console.log("DATABASE ERROR: " + err)
            return false
        }
    }
}

module.exports = MemoryInfra