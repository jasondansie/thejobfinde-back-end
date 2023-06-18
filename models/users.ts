import mongoose, { Document, Model, Schema  } from 'mongoose';

export interface IUser extends Document {
    id: string;
    name: string;
    email: string;
    givenName: string;
    familyName: string;
    picture: string;
}

const userSchema: Schema<IUser> = new Schema<IUser>({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    givenName: {
        type: String,
        required: true,
    },
    familyName: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
});

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;