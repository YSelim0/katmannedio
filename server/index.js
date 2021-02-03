const app = require("express")();
const http = require("http").createServer(app);
const config = require("./config/index");
const loaders = require("./loaders/index");
const path = require("path");

loaders({ expressApp: app });

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello world"
    });
});

http.listen(config.port);
