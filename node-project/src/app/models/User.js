const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
var mongoose_delete = require('mongoose-delete');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: 5,
    required: true,
  },
  name: {
    type: String,
    default: '',
    minlength: 5,
    required: true,
  }
});

User.plugin(mongoose_delete);
User.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: 'all',
}); // những thằng nào có field deleted:true sẽ không hiện ra & kèm thời gian xóa

module.exports = mongoose.model('User', User);
