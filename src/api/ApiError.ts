type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

class ApiError extends Error {
  public statusCode: number;

  public data: unknown;

  public method: Method;

  constructor({
    message,
    statusCode,
    data,
    method,
  }: {
    message: string;
    statusCode: number;
    data?: unknown;
    method: Method;
  }) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.data = data;
    this.method = method;
  }
}

export default ApiError;
