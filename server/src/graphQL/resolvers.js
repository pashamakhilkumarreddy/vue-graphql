module.exports = {
  Query: {
    async getPosts(_, args, { Post }) {
      try {
        const posts = await Post.find({}).sort({
          createdDate: 'desc',
        }).populate({
          path: 'createdBy',
          model: 'User',
        });
        return posts;
      } catch (err) {
        console.error(err);
        return undefined;
      }
    },
  },
  Mutation: {
    async register(_, { username, email, password }, { User }) {
      try {
        const user = await User.findOne({
          username,
        });
        if (user) {
          throw new Error('User already exists');
        }
        const newUser = await new User({
          username,
          email,
          password,
        }).save();
        return newUser;
      } catch (err) {
        console.error(err);
        return undefined;
      }
    },
    async addPost(_, {
      title, imageURL, categories, description, createrId,
    }, { Post }) {
      try {
        const newPost = await new Post({
          title,
          imageURL,
          categories,
          description,
          createdBy: createrId,
        }).save();
        return newPost;
      } catch (err) {
        console.error(err);
        return undefined;
      }
    },
  },
};
