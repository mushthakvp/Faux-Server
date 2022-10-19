const multer = require("multer");


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            Math.floor(Math.random() * 90000) + 10000 + "-" + file.originalname
        );
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg"
    )
        cb(null, true);
    else cb(null, false);
};

const upload = multer({ storage: fileStorage, fileFilter: fileFilter });

module.exports = { upload }