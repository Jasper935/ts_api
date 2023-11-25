import {Request, Response} from 'express';
import UsersService from './users.service';

class UsersController {
    async createUser(req: Request, res: Response): Promise<Response> {
        const {email, password, roles} = req.body;

        try {
            const user = await UsersService.create(email, password, roles);
            return res.status(200).json({message: 'User created successfully', user});
        } catch (error) {
            console.error(error);
            return res.status(400).json({message: `Can not create user. ${error.message}`});
        }
    }

    async getUsers(req: Request, res: Response): Promise<Response> {
        try {
            const users = await UsersService.getAll();
            return res.json({users});
        } catch (error: any) {
            console.error(error);
            return res.status(400).json({message: `Can not get users. ${error.message}`});
        }
    }
}

export default new UsersController();