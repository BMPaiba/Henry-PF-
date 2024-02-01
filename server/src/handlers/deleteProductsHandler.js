

const deleteProductsHandler = async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteProductsHandler;