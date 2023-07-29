import { Request, Response, NextFunction } from 'express';
import ApiError from '../exceptions/api-error.exception';

function ErrorMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
  console.log(error);
  if (error instanceof ApiError) {
    return res.status(error.status).json({ message: error.message, errors: error.errors });
  }

  return res.status(500).json({ message: 'Unhandled error' });
}

export default ErrorMiddleware;
