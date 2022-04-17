import { ErrorResponse } from './error-response.model'

export interface ResponseIO<T> {
  error: ErrorResponse;
  results: T;
}