const logger = (request, response, next) => {
    console.log("-------- NEW REQUEST -----");
    console.log("METHOD:" + request.method);
    console.log("PATH  :" + request.path);
    console.log("-------- END REQUEST ----");
    next()
}

module.exports = logger