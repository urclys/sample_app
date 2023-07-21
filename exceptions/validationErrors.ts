import { ConflictException, HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  constructor(message:string) {
    super(message,HttpStatus.BAD_REQUEST);
  }
}
// export class UniqueEmailException extends ValidationException {
//   constructor() {
//     super('Email already exists');
//   }
// }
