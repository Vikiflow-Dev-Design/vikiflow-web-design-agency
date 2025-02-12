import mongoose, { Document } from "mongoose";

interface IPost extends Document {
  title: string;
  content: string;
  slug: string;
  imageUrl?: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
    },
    imageUrl: {
      type: String,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create slug from title before saving
PostSchema.pre("save", function (this: IPost, next: () => void) {
  if (this.isModified("title")) {
    this.slug = this.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");
  }
  next();
});

export default mongoose.models.Post ||
  mongoose.model<IPost>("Post", PostSchema);
