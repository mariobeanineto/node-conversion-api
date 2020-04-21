const convert = require('convert-units')

exports.doConversion = (req, res, next) => {
    if (existsConversion(req.params.from, req.params.to)) {
        var converted = convert(req.params.value).from(req.params.from).to(req.params.to)
        return res.status(200).send({result: converted})
    }
    return res.status(500).send({result: 'Incorrect params'})
}

var existsConversion = function (from, to) {
    return (convert().possibilities().indexOf(from) >= 0 && convert().possibilities().indexOf(to) >= 0)
}