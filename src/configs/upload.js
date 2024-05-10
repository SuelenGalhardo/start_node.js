const path = require("path");
const multer = require("multer");

const TPM_FOLDER = path.resolver(__dirname, "..", "..", "tmp");
const UPLOADS_FOLDER = path.resolve(__dirname, "uploads");

const MULTER = {
  Storage: multer.diskStorage({
    destination: TPM_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};


module.exports = {
    TPM_FOLDER, 
    UPLOADS_FOLDER,
    MULTER,
}
// INSTALADA BIBLIOTECA MULTER-CRYPTO
