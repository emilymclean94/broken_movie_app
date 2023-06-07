const { Schema, model } = require('mongoose');
const movieSchema = require("./Movie");
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
    // avatar: { type: String }, 
    email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Must match an email address!'], },
    myList: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
      },
    ],
    watched: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
    },
  ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return `${this.friends.length}`;
  })


userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;