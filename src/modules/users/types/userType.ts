import User from "@/modules/users/schemas/User";
import {Schema} from "mongoose";
import {Role} from "@/modules/enums";


export interface IUser {
    email: string,
    password: string,
    roles: Role[],
    seafarerId: Schema.Types.ObjectId | "" ,
    _id?:Schema.Types.ObjectId
}
// export type UserWithoutId = Omit<IUser, "_id">
// const isUser=(user:unknown):user is IUser=> {
//
// }

