export class NextJSON<Data> {
  success: boolean;
  message: string;
  data?: Data;

  constructor(data: NextJSON<Data>) {
    this.success = data.success;
    this.message = data.message;
    this.data = data?.data;
  }
}
