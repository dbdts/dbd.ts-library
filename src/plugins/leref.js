module.exports = {
    name: "$leref",
    description: "Leref amazing plugin!",
    execute: async (d, fn) => {
        return fn.resolve("Leref amazing message return!")
    }
}