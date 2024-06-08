

const { Schema, model } = require("mongoose");
const propertySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  bedrooms: { type: String, required: true },
  bathrooms: { type: String, required: true },
  nearByPlaces: { type: String, required: true },
  rent: { type: String, required: true },
  // photos: { type: [String], required: true }
});

const Property = model("Property", propertySchema)

module.exports = Property;