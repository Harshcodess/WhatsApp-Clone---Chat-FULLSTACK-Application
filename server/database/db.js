import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:whatsapp@ac-wgttety-shard-00-00.u4t4o37.mongodb.net:27017,ac-wgttety-shard-00-01.u4t4o37.mongodb.net:27017,ac-wgttety-shard-00-02.u4t4o37.mongodb.net:27017/?ssl=true&replicaSet=atlas-iw999x-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;