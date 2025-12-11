export type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export interface EndpointDetail {
  label: string;
  content: any;
}

export type EndpointMap = {
  [endpoint: string]: EndpointDetail[];
};

export type MethodMap = {
  [method in HTTPMethod]?: EndpointMap;
};

export type DataTypeDTO = {
  [category: string]: MethodMap;
};
