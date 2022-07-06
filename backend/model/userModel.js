import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Your Email"],
  },
  password: {
    type: String,
    select: false,
    required: [true, "Please Enter your password"],
  },
  timeline: [
    {
      title: String,
      description: String,
      date: Date,
    },
  ],
  skills: [
    {
      image: {
        public_id: String,
        url: String,
      },
      sname: String,
      rating: String,
    },
  ],
  address: {
    address: String,
    street: String,
    pincode: String,
  },
  projects: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
      description: String,
      techStack: String,
    },
  ],
  about: {
    name: String,
    title: String,
    subtitle: String,
    quote: String,
    avtar: String,
  },
  profileIamge: {
    public_id: String,
    url: String,
  },
});

export const User = mongoose.model("User", userSchema);
