const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/management');
    console.log('Connect DB successfully');
  } catch (error) {
    console.log('Connect DB Fail!');
  }
}

module.exports = {
  connect: connect,
};
