module.exports = class HttpsAdapter {
  constructor(controller) {
    this.controller = controller;
  }

  adapt() {
    return async (req, res) => {
      const httpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
        req: req,
      };
      const httpResponse = await this.controller.returnHttpResponse(httpRequest)
      if (httpResponse.statusCode) {
        res.status(httpResponse.statusCode).send(httpResponse.body);
      } else {
        res.status(400).send(httpResponse.body);
      }
    };
  }
};
