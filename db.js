const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

const user = new User({
  name: 'John Doe',
  email: 'john@example.com'
});

user.save()
.then(() => console.log('User saved'))
.catch((err) => console.error('Failed to save user', err));