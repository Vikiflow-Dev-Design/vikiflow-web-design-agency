import mongoose, { Document } from "mongoose";

interface ITeam extends Document {
  name: string;
  slug: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  education: string;
  contact: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  order?: number;
  createdAt: Date;
  updatedAt: Date;
}

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    bio: {
      type: String,
      required: [true, "Bio is required"],
    },
    expertise: [
      {
        type: String,
        required: [true, "At least one expertise is required"],
        trim: true,
      },
    ],
    education: {
      type: String,
      required: [true, "Education is required"],
      trim: true,
    },
    contact: {
      type: String,
      required: [true, "Contact information is required"],
      trim: true,
    },
    social: {
      linkedin: String,
      github: String,
      twitter: String,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Create slug from name before saving
TeamSchema.pre("save", function (this: ITeam, next: () => void) {
  if (this.isModified("name")) {
    this.slug = this.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");
  }
  next();
});

export default mongoose.models.Team ||
  mongoose.model<ITeam>("Team", TeamSchema);
