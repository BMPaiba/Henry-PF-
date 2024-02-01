require("dotenv").config();
const { Sequelize } = require("sequelize");
const UserModel = require('./models/User');
const PostModel = require('./models/Post');
const ProductModel = require('./models/Product');
const SpecificationModel = require('./models/Specification');
const QualificationModel = require('./models/Qualification');
const BuyModel = require('./models/Buy');

const fs = require('fs');
const path = require('path');
const { DB_RENDER_URL } = process.env;

const sequelize = new Sequelize(DB_RENDER_URL, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

UserModel(sequelize);
ProductModel(sequelize);
SpecificationModel(sequelize);
QualificationModel(sequelize);
PostModel(sequelize);
BuyModel(sequelize);

const { Product, Specification, Qualification, User, Post, Buy } = sequelize.models;


const Favorites = "Favorites";
const Shopping = "Shopping";

// Products.belongsToMany(Specifications, {through: relationProductsSpecifications, timestamps: false});
// Specifications.belongsToMany(Products, {through: relationProductsSpecifications, timestamps: false});
Specification.belongsTo(Product);

Qualification.belongsTo(Product);
Qualification.belongsTo(User);

Post.belongsTo(User);

User.belongsToMany(Product, {through: Favorites, timestamps: false});
Product.belongsToMany(User, {through: Favorites, timestamps: false});

User.belongsToMany(Product, {through: Shopping, timestamps: false});
Product.belongsToMany(User, {through: Shopping, timestamps: false});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};