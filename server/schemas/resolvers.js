const { AuthenticationError } = require('apollo-server-express');
const { Movie, User } = require('../models');
const { signToken } = require('../utils/auth');


// ! Copy pasta below -- refactoring in progress
// ! Took avatar out of create user mutation - will need to reinsert

const resolvers = {
    Query: {
        users: async () => {
          return await User.find() ;
          },
          user: async (parent, { username }) => {
            return User.findOne({ username: username });
          },
          movies: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Movie.find({});
          },
          movie: async (parent) => {
            return Movie.find(); 
          },
          me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ username: context.user.username}).populate('watched');
            }
            throw new AuthenticationError('You need to be logged in!');
          },
        
    },
    Mutation: {
        addUser: async (parent, input) => {
          const { username, email, password, bio, genre, firstname } = input;
          const user = await User.create({ firstname, username, email, password, genre, bio });
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
        
        addMovie: async (parent, { username }) => {
          const movie = await Movie.create({ posterImg, title, releaseDate, description, rating, updatedAt });
    
          await User.findOneAndUpdate(
            { username },
            { $addToSet: { watched: movieId } }
          );
    
          return thought;
        },
        removeMovie: async (parent, { movieId }) => {
          return Movie.findOneAndDelete({ _id: movieId });
        },
      
      },
};

module.exports = resolvers;