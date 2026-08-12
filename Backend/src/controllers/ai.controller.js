const aiService = require("../services/ai.service");

module.exports.getResponses = {
  async generate(req, res) {
    try {
      const { code, explanationLanguage } = req.body;

      if (!code) {
        return res.status(400).json({
          error: "Code is required",
        });
      }

      if (!explanationLanguage) {
        return res.status(400).json({
          error: "Explanation language is required",
        });
      }

      const response = await aiService(code, explanationLanguage);

      res.send(response);
    } catch (error) {
      console.error("AI ERROR:", error);

      res.status(500).json({
        error: error.message,
      });
    }
  },
};