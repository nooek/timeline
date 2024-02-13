module.exports = class HttpResponse {
  makeError(error) {
    return {
      statusCode: error.statusCode,
      body: {
        error: error.messageToClient,
      },
    };
  }

  makeRes(data) {
    return {
      body: data,
      statusCode: 200,
    };
  }
};
