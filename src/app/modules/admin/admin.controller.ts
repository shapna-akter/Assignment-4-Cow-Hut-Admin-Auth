// import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
// import sendResponse from '../../../shared/sendResponse';
// import httpStatus from 'http-status';
// import { AdminService } from './admin.service';
// import { IAdmin } from './admin.interface';

import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAdmin } from './admin.interface';
import { AdminService } from './admin.service';

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const admin = req.body;

  const result = await AdminService.createAdmin(admin);

  sendResponse<Partial<IAdmin>>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Admin created successfully!',
    data: result,
  });
});

export const adminController = {
  createAdmin,
};
