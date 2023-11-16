module.exports = {
    get: async(req,res) => {
        return res.status(200).json({ message: 'This is a message from example api' })
    }
}