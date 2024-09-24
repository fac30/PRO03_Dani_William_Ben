import { Router, Request, Response } from 'express';

const userRouter = Router();

userRouter.get('/', (req: Request, res: Response) => {
  res.json({ message: 'User endpoint is working' });
});

userRouter.get('/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  res.json({ message: `User with ID ${userId}` });
});

export default userRouter;

