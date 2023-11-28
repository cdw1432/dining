module.exports = {
    get: async(req,res) => {
        res.status(200).json({ message: 'This is a message from example api!' })
    }
}