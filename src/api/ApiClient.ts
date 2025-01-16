import ApiError from './ApiError';
import tokenService from './services/tokenService';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type BodyHashMap = Record<string, any>;

interface BaseApiClientParams {
  path: string;
  requiresAuth?: boolean;
}

interface ApiClientParamsWithBody extends BaseApiClientParams {
  body?: BodyHashMap;
}

interface ApiClientType {
  get<T>(params: BaseApiClientParams): Promise<{ body: T; headers: Headers }>;
  post<T>(params: ApiClientParamsWithBody): Promise<{ body: T; headers: Headers }>;
  patch<T>(params: ApiClientParamsWithBody): Promise<{ body: T; headers: Headers }>;
  put<T>(params: ApiClientParamsWithBody): Promise<{ body: T; headers: Headers }>;
  delete(params: BaseApiClientParams): Promise<{ body: null; headers: Headers }>;
}

export default class ApiClient implements ApiClientType {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = process.env.API_URL + baseURL;
  }

  async get<T>(params: BaseApiClientParams): Promise<{ body: T; headers: Headers }> {
    return this.request<T>({ method: 'GET', ...params });
  }

  async post<T>(
    params: ApiClientParamsWithBody & { isFormData?: boolean }
  ): Promise<{ body: T; headers: Headers }> {
    return this.request<T>({ method: 'POST', ...params });
  }

  async patch<T>(params: ApiClientParamsWithBody): Promise<{ body: T; headers: Headers }> {
    return this.request<T>({ method: 'PATCH', ...params });
  }

  async put<T>(params: ApiClientParamsWithBody): Promise<{ body: T; headers: Headers }> {
    return this.request<T>({ method: 'PUT', ...params });
  }

  async delete(params: BaseApiClientParams): Promise<{ body: null; headers: Headers }> {
    return this.request<null>({ method: 'DELETE', ...params });
  }

  private async getRequestInit({
    method,
    body,
    requiresAuth = true,
    isFormData = false,
  }: {
    method: Method;
    body?: BodyHashMap;
    requiresAuth?: boolean;
    isFormData?: boolean;
  }) {
    const headers: HeadersInit = {
      Accept: 'application/json',
    };

    if (requiresAuth) {
      const accessToken = await await tokenService.getAccessToken();
      headers['Authorization'] = `${accessToken}`;
      const refreshToken = await tokenService.getRefreshToken();
      headers['Authorization-Refresh'] = `${refreshToken}`;
    }

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
    requiresAuth,
    isFormData,
  }: {
    path: string;
    method: Method;
    body?: BodyHashMap;
    requiresAuth?: boolean;
    isFormData?: boolean;
  }): Promise<{ body: T; headers: Headers }> {
    const url = this.baseURL + path;
    //console.log(url); -> todo: 주석 없애면 api 에러나는 문제 해결 (비동기 처리 시점? 관련으로 추정)
    const response = await fetch(
      url,
      await this.getRequestInit({ method, body, requiresAuth, isFormData })
    );

    if (!response.ok) {
      const json = await response.json();
      throw new ApiError({ message: json.detail ?? '', statusCode: response.status, method });
    }

    const contentType = response.headers.get('Content-Type');
    if (contentType?.includes('application/json')) {
      const jsonBody = await response.json();
      return { body: jsonBody, headers: response.headers };
    }

    const textBody = await response.text();
    return { body: textBody as T, headers: response.headers };
  }
}
