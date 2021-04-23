import { IUser } from "../models/user.model";

export class UsersService {
    public getUsers() {
        return IUser.findAll<IUser>({});
    }
}