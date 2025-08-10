// src/models/User.ts
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

// ইউজারের জন্য TypeScript interface
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'Admin' | 'Student' | 'Supervisor';
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Student', 'Supervisor'], default: 'Student' },
}, { timestamps: true });

// সেভ হওয়ার আগে পাসওয়ার্ড hash করা হচ্ছে
userSchema.pre<IUser>('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// পাসওয়ার্ড তুলনা করার জন্য একটি method
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model<IUser>('User', userSchema);
export default User;