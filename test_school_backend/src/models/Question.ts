import mongoose, { Document, Schema } from 'mongoose';

export interface IQuestion extends Document {
    text: string;
    options: string[];
    correctAnswer: string;
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
    competency: string;
}

const questionSchema: Schema = new Schema({
    text: { type: String, required: true },
    options: { type: [String], required: true },
    correctAnswer: { type: String, required: true },
    level: { type: String, enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], required: true },
    competency: { type: String, required: true },
}, { timestamps: true });

const Question = mongoose.model<IQuestion>('Question', questionSchema);
export default Question;
