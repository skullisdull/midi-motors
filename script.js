import { readdir } from "fs";

readdir("midi", (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
}); 