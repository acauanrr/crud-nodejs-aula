const mongoose = require('mongoose');

// const MONGODB_URI = 'mongodb://localhost/node-app';
const MONGODB_URI = 'mongodb+srv://'+process.env.MONGODB_USER+':'+process.env.MONGODB_PASSWORD+'@cluster0.kpfik.mongodb.net/'+process.env.MONGODB_DATABASE+'?retryWrites=true&w=majority';

// const MONGODB_URI = 'mongodb+srv://'+process.env.MONGODB_USER+':'+process.env.MONGODB_PASSWORD+'@'+process.env.MONGODB_HOST+'/'+process.env.MONGODB_DATABASE+'?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Database is connected to', db.connection.host))
.catch(err => console.log(err));