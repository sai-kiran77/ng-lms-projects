const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
})

module.exports = mongoose;