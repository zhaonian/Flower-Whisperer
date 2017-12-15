var express = require('express');
var router = express.Router();
var IoTHub = require('../IoTHub/IoTHub');

/* GET users listing. */
router.get('/', function (req, res, next) {

        var iotHubReader = new IoTHub(process.env['Azure.IoT.IoTHub.ConnectionString'], process.env['Azure.IoT.IoTHub.ConsumerGroup']);
        iotHubReader.startReadMessage(function (obj, date) {
                try {
                        console.log(date);
                        // dat = new Date().toString().slice(0, -37);
                        dat = new Date().toLocaleString() + " GMT";
                        obj.date = dat;
                        return res.send(obj);
                } catch (err) {
                        // dat = new Date().toString().slice(0, -37);
                        dat = new Date().toLocaleString() + "GMT";
                        obj.date = dat;
                        return res.send(obj);
                        // console.log(obj);
                        // console.error(err);
                }

        });
});

module.exports = router;
