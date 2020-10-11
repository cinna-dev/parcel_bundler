import { jokes } from "./jokes.js";
import $ from "jquery";
import fs from "fs"; //node js

jokes.getOne().then(joke => {
  //   document.getElementById("joke").innerHTML = joke;
  $("#joke").text(joke);
});

const copy = fs.readFileSync(__dirname + "/copyright.txt", "utf8");

$("#copy").text(copy);

//everything gets bundled by Parcel into the dist folder
/* autoprefixer adds all the different browser conventions to our bundled css 
like "-ms-" "-webkit-" etc
npm i autoprefixe */
