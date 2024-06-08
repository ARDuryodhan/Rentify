const Property = require("../Models/Property-model");

const propertiesForm = async (req, res) => {
  try {
    const response = req.body;
    console.log("Received property data:", response); // Log received data

    // Ensure the required fields are present
    if (
      !response.title ||
      !response.description ||
      !response.address ||
      !response.bedrooms ||
      !response.bathrooms ||
      !response.nearByPlaces ||
      !response.rent
      //   !response.photos
    ) {
      console.log(response._id);
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProperty = await Property.create(response);
    console.log("Property added successfully:", newProperty);

    return res.status(200).json("Property added successfully");
  } catch (error) {
    console.error("Error adding property:", error.message);
    return res.status(500).json({
      message: "Failed to add property",
      error: error.message,
    });
  }
};

module.exports = propertiesForm;
