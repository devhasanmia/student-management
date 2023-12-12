const defaultError = (_req, res, _next) => {
    res.status(500).json({
        message: "404 Not Found"
    })
}

module.exports = {
    defaultError
}