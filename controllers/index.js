const authController = require("./authController");
const addressController = require("./addressController");
const categoryController = require("./categoryController");
const deliveryOptionController = require("./deliveryOptionController");
const authAdminControllers = require("./authAdminControllers");
const productController = require("./productController");
const cartController = require("./cartController");
// const uploaderController = require("./uploaderController");

module.exports = {
  authAdminControllers,
  authController,
  addressController,
  categoryController,
  deliveryOptionController,
  productController,
  cartController,

};
