const errorHandler = (err, req, res, next) => {
    console.log(`${err.name}:${err.message}`);
    console.error(err.stack);
    res.status(500).send(err.message);
}