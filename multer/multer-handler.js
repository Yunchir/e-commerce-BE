import multer from "multer";
import { nanoid } from "nanoid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const ext = getExtension(file.originalname);
    const newName = nanoid() + "." + ext;

    cb(null, newName);
  },
});

function getExtension(name) {
  const arr = name.split(".");
  return arr[arr.length - 1];
}

const multerHandler = multer({ storage });

export default multerHandler;
