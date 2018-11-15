import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
/* api接口配置 */
const API_ROOT = environment.api;
const HTTP_OPTIONS: {
    headers?:
      | HttpHeaders
      | {
          [header: string]: string | string[];
        };
    params?: HttpParams;
    responseType?: 'json';
    withCredentials?: boolean;
  } = {
      withCredentials: true,
      headers: {
        'x-csrf-token': 'csrftoken'
      }
    };
@Injectable()
export class ApiService {
  baseUrl = '';
  constructor(
    private http: HttpClient,
  ) {
    // this.ApiUrl = this.apiConfig.load();
    this.baseUrl = API_ROOT.rapApi;
  }
  /**
   *
   * @param {string} url
   * @returns
   * @memberof ApiService
   */
  setBaseUrl(url: string) {
    this.baseUrl = url;
    return this;
  }
  /**
   * post方法
   * @param {string} url  请求地址
   * @param {string} body
   * @param {RequestOptionsArgs} [options]
   * @param {boolean} [hideLoading]
   * @returns {Observable<any>} 返回可观察对象
   * @memberof ApiService
   */
  post(
    url: string,
    body?: any,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      responseType?: 'json';
      withCredentials?: boolean;
    },
    hideLoading?: boolean
  ): Observable<any> {
    let _options = this.setRequiresOptions(options);
    return this.http.post(this.getFullUrl(url), body ? body : {}, _options);
  }
  /**
   * get方法
   * @param url 必填，路径地址
   * @param body 查询条件
   * @param options 请求参数自定义
   * @returns {Observable<>}
   */
  get(
    url: string,
    body?: any,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<any> {
    let _options = this.setRequiresOptions(options);
    let serchParam = this.parseParams(body);
    _options = Object.assign(_options, {
      params: serchParam
    });
    return this.http.get(this.getFullUrl(url), _options);
  }

  parseParams(params: any): HttpParams {
    let ret = new HttpParams();
    if (params) {
      for (const key in params) {
        let _data = params[key];
        ret = ret.set(key, _data);
      }
    }
    return ret;
  }
  setRequiresOptions(options: {
    headers?:
      | HttpHeaders
      | {
          [header: string]: string | string[];
        };
    params?:
      | HttpParams
      | {
          [param: string]: string | string[];
        };
    responseType?: 'json';
    withCredentials?: boolean;
  }) {
    const _default = HTTP_OPTIONS ? { ...HTTP_OPTIONS } : {};
    if (!options) return _default;
    return Object.assign({}, _default, options);
  }

  /**
   * Build API url
   * @param url
   * @returns {string}
   */
  private getFullUrl(url: string): string {
    // return full URL to API here
    return this.baseUrl + url;
  }
}
