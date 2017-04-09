var appRouter = function(app) {
    var fontAwesomeBrand = require("font-awesome-brand");

    app.get("/", function(req, res) {
        return res.send({
            "status": "success",
            "statusmsg": null,
            "data": fontAwesomeBrand
        });
    });

    app.get("/about", function(req, res) {
      var font_awesome_brand_api = require("../package.json");
        return res.send({
            "status": "success",
            "statusmsg": null,
            "version": "1.0.0",
            "fontawesome-version": "4.7.0",
            "package": font_awesome_brand_api
        });
    });

    app.get("/:domain", function(req, res) {
        if (fontAwesomeBrand[res.req.params.domain] != undefined) {
            return res.send({
                "status": "success",
                "statusmsg": null,
                "data": fontAwesomeBrand[res.req.params.domain]
            });
        } else {
            return res.send({
                "status": "error",
                "statusmsg": "Nothing found for this domain"
            });
        }
    });

}

module.exports = appRouter;