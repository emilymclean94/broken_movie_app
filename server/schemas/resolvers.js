const { AuthenticationError } = require('apollo-server-express');
const { Movie, User } = require('../models');
const { signToken } = require('../utils/auth');


// ! Copy pasta below -- refactoring in progress

const resolvers = {
    Query: {
        users: async () => {
          return await User.find({}).populate('watched');
          },
          user: async (parent, { username }) => {
            return User.findOne({ username }).populate('watched');
          },
          movies: async (parent, {  }) => {
            const params = username ? { username } : {};
            return Movie.find({});
          },
          movie: async (parent, { movieId }) => {
            return Movie.findOne({ _id: movieId });
          },
        
    },
    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
          return { token, user };
        },
        login: async (parent, { username, password }) => {
          const user = await User.findOne({ username });
    
          if (!user) {
            throw new AuthenticationError('No user found with this username');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const token = signToken(user);
    
          return { token, user };
        },
        // addMovie: async (parent, { thoughtText, thoughtAuthor }) => {
        //   const thought = await Thought.create({ thoughtText, thoughtAuthor });
    
        //   await User.findOneAndUpdate(
        //     { username: thoughtAuthor },
        //     { $addToSet: { thoughts: thought._id } }
        //   );
    
        //   return thought;
        // },
        removeMovie: async (parent, { movieId }) => {
          return Movie.findOneAndDelete({ _id: movieId });
        },
      
      },
};

module.exports = resolvers;