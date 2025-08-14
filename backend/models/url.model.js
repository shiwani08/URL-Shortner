import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true, 
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true, 
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("URL", urlSchema);