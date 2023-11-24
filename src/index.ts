import express from "express";
import {ddd} from "@/modules/users/users.controller"
const app = express();
console.log("LOH");

app.listen(5000, () => {
  console.log("Strated");
}, );
