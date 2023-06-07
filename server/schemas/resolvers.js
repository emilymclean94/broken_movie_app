const { AuthenticationError } = require('apollo-server-express');
const { Movie, User } = require('../models');
const { signToken } = require('../utils/auth');


// ! Copy pasta below -- refactoring in progress

const resolvers = {
    Query: {
        users: async () => {
          return await User.find() ;
          },
          user: async (parent, { username }) => {
            return User.findOne({ username });
          },
          movies: async (parent, {  }) => {
            const params = username ? { username } : {};
            return Movie.find({});
          },
          movie: async (parent, { movieId }) => {
            return Movie.findOne({ _id: movieId });
          },
          // me: async (parent, args, context) => {
          //   if (context.user) {
          //     return User.findOne({ _id: context.user._id }).populate('watched');
          //   }
          //   throw new AuthenticationError('You need to be logged in!');
          // },
        
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