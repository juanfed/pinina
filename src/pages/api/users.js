export default (req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        if (email === '12345@12345.com') {
            if (password === '12345') {
                res.status(200).json({ msg: 'Correct Login', code: 0, email })
            } else {
                res.status(401).json({ code: -1, msg: 'User data is not correct' })
            }
        } else {
            res.status(401).json({ code: -1, msg: 'User data is not correct' })
        }
    } else {
        res.status(400).json({ msg: 'Method not valid', code: -2 })
    }
}