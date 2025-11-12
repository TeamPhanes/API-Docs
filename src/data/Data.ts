import { DataTypeDTO } from '@/type/DataTypeDTO';

export const ProjectName = 'Re:Play';

export const DataType: DataTypeDTO = {
  'O-Auth': {
    GET: {
      '/auth/{socialType}\n소셜 간편 로그인': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
          },
        },
        {
          label: 'Parameters',
          content: {
            socialType: 'string',
          },
        },
      ],
      'auth/{socialType}/callback\n소셜 간편 로그인 완료 후': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
          },
        },
        {
          label: 'Parameters',
          content: {
            socialType: 'string',
            code: 'string',
            state: 'string',
          },
        },
      ],
    },
    POST: {
      '/auth/refresh\n리프레쉬 토큰 갱신': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
      ],
      '/auth/logout\n로그아웃': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
      ],
    },
  },
  User: {
    GET: {
      '/user/me\n내 정보 조회': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Responses',
          content: {
            nickname: 'string',
            image: 'string',
          },
        },
      ],
    },
  },
  Theme: {
    GET: {
      '/theme\n방탈출 목록 조회': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Parameters',
          content: {
            state: 'string[]',
            city: 'string[]',
            genres: 'string[]',
            page: 'number',
            size: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: [
              {
                id: 'number',
                title: 'string',
                playtime: 'number',
                level: 'string',
                image: 'string',
                minPlayer: 'number',
                maxPlayer: 'number',
                cafeName: 'string',
                spotName: 'string',
                address: 'string',
                genres: 'string[]',
                reviewCount: 'number',
                avgScore: 'number',
                isLiked: 'boolean',
                isVisited: 'boolean',
              },
            ],
          },
        },
      ],
      '/theme/like\n방탈출 좋아요 목록 조회': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Parameters',
          content: {
            state: 'string[]',
            city: 'string[]',
            genres: 'string[]',
            page: 'number',
            size: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: [
              {
                id: 'number',
                title: 'string',
                playtime: 'number',
                level: 'string',
                image: 'string',
                minPlayer: 'number',
                maxPlayer: 'number',
                cafeName: 'string',
                spotName: 'string',
                address: 'string',
                genres: 'string[]',
                reviewCount: 'number',
                avgScore: 'number',
                isLiked: 'boolean',
                isVisited: 'boolean',
              },
            ],
          },
        },
      ],
      '/theme/visit\n방탈출 참여한 목록 조회': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Parameters',
          content: {
            state: 'string[]',
            city: 'string[]',
            genres: 'string[]',
            page: 'number',
            size: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: [
              {
                id: 'number',
                title: 'string',
                playtime: 'number',
                level: 'string',
                image: 'string',
                minPlayer: 'number',
                maxPlayer: 'number',
                cafeName: 'string',
                spotName: 'string',
                address: 'string',
                genres: 'string[]',
                reviewCount: 'number',
                avgScore: 'number',
                isLiked: 'boolean',
                isVisited: 'boolean',
              },
            ],
          },
        },
      ],
    },
  },
};
