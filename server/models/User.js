const { Schema, model } = require('mongoose');
const movieScema = require("./Movie");


const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    avatar: { type: String, required: true }, 
    email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Must match an email address!'], },
    // myList: [movieScema],
    // watched: [movieScema],
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


const User = model('User', userSchema);

module.exports = User;