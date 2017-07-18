var mongoose = require('mongoose');
mongoose.connect('mongodb://joeblob:joeblob@ds161032.mlab.com:61032/phonecat')
var fs = require('fs');

var phoneSchema = mongoose.Schema({
    battery:{
        standbyTime: String,
        talkTime: String,
        type: {type: String}
    },
    additionalFeatures: String,
    android:{
      os:String,
      ui:String
    },
    availability:[String],
    camera: {
        "features": [
          String
        ],
        "primary": String
    },
    connectivity: {
        "bluetooth": String,
        "cell": String,
        "gps": Boolean,
        "infrared": Boolean,
        "wifi": String
    },
    description: String,
    display: {
        "screenResolution": String,
        "screenSize": String,
        "touchScreen": Boolean
    },
    "hardware": {
        "accelerometer": Boolean,
        "audioJack": String,
        "cpu": String,
        "fmRadio": Boolean,
        "physicalKeyboard": Boolean,
        "usb": String
    },
    "id": String,
    "images": [
      String
    ],
    "name": String,
    "sizeAndWeight": {
        "dimensions": [
          String
        ],
        "weight": String
    },
    "storage": {
        "flash": String,
        "ram": String
    }
});

var Phone = mongoose.model('Phone', phoneSchema);


module.exports = Phone;
