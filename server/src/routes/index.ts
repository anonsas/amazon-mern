import { Router } from 'express';
import { body } from 'express-validator';
import userController from '../controllers/user.controller';

export const router = Router();

router.post(
  '/register',
  body('name').isString(),
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 32 }),
  userController.register
);
router.post('/login', userController.login);
router.post('/logout', userController.logout); //refreshToken will be deleted from DB
router.get('/activate/:link', userController.activateAccount);
//will be re-writing accessToken if he's dead. By sending refreshToken from cookies in headers.
router.get('/refresh', userController.refreshToken);
router.get('/users', userController.getUsers);
