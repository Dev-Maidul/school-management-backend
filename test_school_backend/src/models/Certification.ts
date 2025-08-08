import { Schema, model, Document, Types } from "mongoose";

export interface ICertification extends Document {
  userId: Types.ObjectId;
  level: string;
  issuedAt: Date;
  certificateUrl?: string;
  emailSent: boolean;
}

const certSchema = new Schema<ICertification>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  level: { type: String, required: true },
  issuedAt: { type: Date, default: Date.now },
  certificateUrl: { type: String },
  emailSent: { type: Boolean, default: false }
}, { timestamps: true });

export default model<ICertification>("Certification", certSchema);
