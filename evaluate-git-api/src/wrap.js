let executing = false;
const queue = [];

module.exports = function wrap(handler) {
  return async function(req, res) {
    try {
      if (executing) {
        await new Promise(resolve => queue.push(resolve));
      }
      executing = true;

      console.log("·", req.url);
      await handler(req, res);
      console.log("√", req.url);
    } catch (e) {
      console.log("!", req.url);
      console.log(e);
      res.status(500).send(e.stack || e);
    }
    executing = false;
    if (queue.length) {
      const resume = queue.pop();
      resume();
    }
  };
};
