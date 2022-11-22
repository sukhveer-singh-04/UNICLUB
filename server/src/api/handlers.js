const healthCheckHandler = (req, res) => res.json({ message: 'Healthy!' });

module.exports = {healthCheckHandler}