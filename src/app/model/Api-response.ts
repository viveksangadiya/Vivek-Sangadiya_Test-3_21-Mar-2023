export interface ApiResponse<T> {
    success: boolean;
    message: string;
    programs: T;
  }
  