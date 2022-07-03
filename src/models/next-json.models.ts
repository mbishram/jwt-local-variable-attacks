export class NextJsonModels<Data> {
  success: boolean;
  message: string;
  data?: Data;

  constructor(data: NextJsonModels<Data>) {
    this.success = data.success;
    this.message = data.message;
    this.data = data?.data;
  }
}
