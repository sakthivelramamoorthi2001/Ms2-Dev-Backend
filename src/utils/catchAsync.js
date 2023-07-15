

const cathcAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((er) => er);
}

module.exports = {
    cathcAsync
}