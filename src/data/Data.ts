import { DataTypeDTO } from '@/type/DataTypeDTO';

export const ProjectName = 'ProjectName';

export const DataType: DataTypeDTO = {
  Type: {
    GET: {
      '/API_Path1\nAPi_Path 설명': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Parameters',
          content: {},
        },
        {
          label: 'Responses',
          content: {},
        },
      ],
    },
    POST: {
      '/API_Path2\nAPi_Path 설명': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Parameters',
          content: {},
        },
        {
          label: 'Request Body',
          content: {},
        },
        {
          label: 'Responses',
          content: {},
        },
      ],
    },
    PATCH: {
      '/API_Path3\nAPi_Path 설명': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Parameters',
          content: {},
        },
        {
          label: 'Request Body',
          content: {},
        },
        {
          label: 'Responses',
          content: {},
        },
      ],
    },
    DELETE: {
      '/API_Path4\nAPi_Path 설명': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Parameters',
          content: {},
        },
        {
          label: 'Responses',
          content: {},
        },
      ],
    },
  },
};
