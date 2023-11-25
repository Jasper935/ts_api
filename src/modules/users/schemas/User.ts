import { Schema, model, Document } from 'mongoose';
import {IUser} from "@/modules/users/types/userType";




const UserSchema: Schema = new Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        roles: [{ type: String, default: "MANAGER" }],
        password: { type: String, default: '' },
        seafarerId: {
            type: Schema.Types.ObjectId,
        },
    },
    {
        timestamps: true
    }
);

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;