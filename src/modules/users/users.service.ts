import User from '../users/schemas/User'
import bcrypt from 'bcryptjs'
import {IUser} from "@/modules/users/types/userType";
import {passwordSalt} from "@/config";

class UsersService {
    async create({email, password, roles}: IUser): Promise<IUser | never> {
        const userEmail = email.toLowerCase()
        const isEmailRegistred = await User.findOne({email: userEmail})
        if (isEmailRegistred) {
            throw new Error(`Profile with this email is already exist.`)
        }
        const hashPass = password ? bcrypt.hashSync(password, Number(passwordSalt)) : ''
        const user = new User({
            email: userEmail, password: hashPass, roles
        })
        await user.save()
        return user

    }

    async getAll() {
        const users = await User.find().sort({createdAt: -1})
        return users

    }
}

export default new UsersService()