import mongoose, { Document } from "mongoose";

interface IProject extends Document {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image URL is required"],
    },
    technologies: [
      {
        type: String,
        required: [true, "At least one technology is required"],
        trim: true,
      },
    ],
    liveUrl: {
      type: String,
      trim: true,
    },
    githubUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create slug from title before saving
ProjectSchema.pre("save", function (this: IProject, next: () => void) {
  if (this.isModified("title")) {
    this.slug = this.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");
  }
  next();
});

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
