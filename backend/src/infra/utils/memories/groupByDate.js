const groupByDate = (memoriesFound) => {
    console.log("3333")
    let memoriesSet = {}

    memoriesFound.forEach((each) => {
        const day = new Date(each.date).getDate()
        if (memoriesSet[day + 1]) {
            memoriesSet = {
                ...memoriesSet,
            [day + 1]: {
                    memoriesQtd: memoriesSet[day + 1].memoriesQtd + each.memories.length,
                    memories: [...memoriesSet[day + 1].memories, each]
                }
            }
        } else {
            memoriesSet = {
                ...memoriesSet,
            [day + 1]: {
                    memoriesQtd: each.memories.length,
                    memories: [each]
                }
            }
        }
    })

    return memoriesSet
}

module.exports = groupByDate;
