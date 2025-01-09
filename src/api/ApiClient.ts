import ApiError from './ApiError';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type BodyHashMap = Record<string, any>;

interface BaseApiClientParams {
  path: string;
}

interface ApiClientParamsWithBody extends BaseApiClientParams {
  body?: BodyHashMap;
}

interface ApiClientType {
  get<T>(params: BaseApiClientParams): Promise<T>;
  post<T>(params: ApiClientParamsWithBody): Promise<T>;
  patch<T>(params: ApiClientParamsWithBody): Promise<T>;
  put<T>(params: ApiClientParamsWithBody): Promise<T>;
  delete(params: BaseApiClientParams): Promise<void>;
}

export default class ApiClient implements ApiClientType {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = process.env.API_URL + baseURL;
  }

  async get<T>(params: BaseApiClientParams): Promise<T> {
    return this.request<T>({ method: 'GET', ...params });
  }

  async post<T>(params: ApiClientParamsWithBody & { isFormData?: boolean }): Promise<T> {
    return this.request<T>({ method: 'POST', ...params });
  }

  async patch<T>(params: ApiClientParamsWithBody): Promise<T> {
    return this.request<T>({ method: 'PATCH', ...params });
  }

  async put<T>(params: ApiClientParamsWithBody): Promise<T> {
    return this.request<T>({ method: 'PUT', ...params });
  }

  async delete(params: BaseApiClientParams): Promise<void> {
    return this.request<void>({ method: 'DELETE', ...params });
  }

  private getRequestInit({
    method,
    body,
    isFormData = false,
  }: {
    method: Method;
    body?: BodyHashMap;
    isFormData?: boolean;
  }) {
    const headers: HeadersInit = {
      Accept: 'application/json',
    };

    const requestInit: RequestInit = {
      method,
      headers,
    };

    if (['POST', 'PUT', 'PATCH'].includes(method) && !isFormData) {
      headers['Content-Type'] = 'application/json';
    }

    if (body && !isFormData) {
      requestInit.body = JSON.stringify(body);
    }

    if (body && isFormData) {
      const formData = new FormData();
      const bodyKeys = Object.keys(body);
      bodyKeys.forEach(key => formData.append(key, body[key]));
      requestInit.body = formData;
    }

    return requestInit;
  }

  private async request<T>({
    path,
    method,
    body,
    isFormData,
  }: {
    path: string;
    method: Method;
    body?: BodyHashMap;
    isFormData?: boolean;
  }): Promise<T> {
    const url = this.baseURL + path;
    const response = await fetch(url, this.getRequestInit({ method, body, isFormData }));

    if (!response.ok) {
      const json = await response.json();
      throw new ApiError({ message: json.detail ?? '', statusCode: response.status, method });
    }

    const contentType = response.headers.get('Content-Type');
    if (contentType?.includes('application/json')) {
      return response.json();
    }

    return response.text() as T;
  }
}
