import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGOURI)
    .then((con) => {
      console.log(`MongoDb is Connected to ${con.connection.host}`);
    })
    .catch((e) => {
      console.log(`Error occured : ${e}`);
    });
};
