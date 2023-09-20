import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ezekiel202x:Zz5mSaSwLau57sv8@cluster0.flozgjx.mongodb.net/?retryWrites=true&w=majority");
    console.log("DB is connected")
  } catch (error) {
    console.log(error);
  }
};
