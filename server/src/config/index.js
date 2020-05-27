require('dotenv').config();

module.exports = {
  server: {
    PORT: parseInt(process.env.PORT, 10),
  },
  db: {
    MONGO_URI: process.env.MONGO_URI,
  },
};
