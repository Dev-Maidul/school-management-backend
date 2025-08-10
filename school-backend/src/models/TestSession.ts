import mongoose, { Document, Schema } from 'mongoose';

export interface ITestSession extends Document {
    user: mongoose.Schema.Types.ObjectId;
    level: string;
    score: number;
    completed: boolean;
    currentStep: number;
}

const testSessionSchema: Schema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    level: { type: String, required: true },
    score: { type: Number, required: true, default: 0 },
    completed: { type: Boolean, required: true, default: false },
    currentStep: { type: Number, required: true, default: 1 },
}, { timestamps: true });

const TestSession = mongoose.model<ITestSession>('TestSession', testSessionSchema);
export default TestSession;
