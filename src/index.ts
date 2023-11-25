import express from 'express';
import mongo from 'mongoose';
import {dbConnectionString} from "@/config";
import usersRouter from "@/modules/users/users.router";
// import seafarersRouter from '@modules/seafarers/seafarers.router.ts';

import cors from 'cors'

const PORT = process.env.PORT || 5000;
mongo.set('strictQuery', false) //эта строка убирает предупреждения с консоли

const app = express()
app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
  response.end("Hello from DB.DOCS server!");
});

app.use("/users", usersRouter)
// app.use("/seafarers", seafarersRouter)


const start = async () => {
  try {
    // @ts-ignore
    await mongo.connect(dbConnectionString)
    app.listen(PORT, () => console.log(`db.docs server started on port ${PORT},`))
  } catch (error) {
    console.log(error);
  }
}
start()
