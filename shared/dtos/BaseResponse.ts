export class BaseResponse<T> {

  data: T | undefined;
  message: string | undefined;

  constructor(baseResponse: BaseResponse<T>) {
    Object.assign(this, baseResponse)
  }
};