import mongoose from "mongoose";

const { Schema } = mongoose;

const emailSchema = new Schema(
  {
    correo: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Email || mongoose.model("Email", emailSchema);
