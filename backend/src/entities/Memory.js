class Memory {
    constructor({ owner, title, desc, date, time, memories }) {
        this.owner = owner;
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.time = time;
        this.memories = memories;
    }
}

module.exports = Memory;
