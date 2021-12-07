module.exports = {
    name: "$dbdts",
    description: "Isn't dbd.ts powerful?",
    execute: async (d, fn) => {
        return fn.resolve("dbd.ts community!")
    }
}