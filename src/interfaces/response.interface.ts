export interface ResponseModel {
  code: number;
  message: string;
  data: any;
  error?: string;
  page?: number;
  limit?: number;
}
