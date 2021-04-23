import { Request, Response } from 'express';
import { IUser, IUserInterface } from '../models/user.model';

export class UsersController {
  public getUsers(req: Request, res: Response) {
    IUser.findAll<IUser>({
      where: req.query,
    })
      .then((users) => res.json(users))
      .catch((err: Error) => res.status(500).json(err));
  }

  public createUser(req: Request, res: Response) {
    const newUser: IUserInterface = req.body;

    IUser.create<IUser>(newUser)
      .then((user: IUser) => res.status(201).json(user))
      .catch((err: Error) => {
          console.log(err);
          res.status(500).json(err);
        });
  }
}
