const defaultError = (_req, res, _next) => {
    res.status(500).json({
        message: "404 Not Found"
    })
}

const errorHandler = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = {
    defaultError,
    errorHandler
}