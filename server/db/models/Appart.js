var {mongoose} = require('../mongoose');

var Appart = mongoose.model('Appart',{
  quartier: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  superficie: {
    type: Number,
    required: true
  }
});

module.exports={Appart};
