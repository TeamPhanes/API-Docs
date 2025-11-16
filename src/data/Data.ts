import { DataTypeDTO } from '@/type/DataTypeDTO';

export const ProjectName = 'Re:Play';

export const DataType: DataTypeDTO = {
  OAuth: {
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
            locations: 'string[]',
            genres: 'string[]',
            page: 'number',
            size: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalPages: 'number',
            number: 'number',
            content: [
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
            locations: 'string[]',
            genres: 'string[]',
            page: 'number',
            size: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalPages: 'number',
            number: 'number',
            content: [
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
            locations: 'string[]',
            genres: 'string[]',
            page: 'number',
            size: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalPages: 'number',
            number: 'number',
            content: [
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
      '/theme/{themeId}\n방탈출 상세 정보 조회': [
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
            totalPages: 'number',
            number: 'number',
            content: [
              {
                id: 'number',
                title: 'string',
                story: 'string',
                playtime: 'number',
                level: 'string',
                image: 'string',
                minPlayer: 'number',
                maxPlayer: 'number',
                note: 'string',
                cafeName: 'string',
                spotName: 'string',
                address: 'string',
                phone: 'string',
                link: 'string',
                genres: 'string[]',
                isLiked: 'boolean',
                isVisited: 'boolean',
              },
            ],
          },
        },
      ],
    },
    POST: {
      '/theme/like/{themeId}\n방탈출 좋아요': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
      ],
      '/theme/visit/{themeId}\n방탈출 방문': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
      ],
    },
    DELETE: {
      '/theme/like/{themeId}\n방탈출 좋아요 취소': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
      ],
      '/theme/visit/{themeId}\n방탈출 방문 취소': [
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
  Review: {
    GET: {
      '/review/{themeId}\n리뷰 목록 조회': [
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
            page: 'number',
            size: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalPages: 'number',
            number: 'number',
            content: [
              {
                avgScore: 'number',
                createdGatheringCount: 'number',
                reviewCount: {
                  reviewScore: 'number',
                  count: 'number',
                },
                userEvaluation: {
                  theme: {
                    label: 'string',
                    percent: 'number',
                  },
                  level: {
                    label: 'string',
                    percent: 'number',
                  },
                  story: {
                    label: 'string',
                    percent: 'number',
                  },
                },
                contents: {
                  id: 'number',
                  title: 'string',
                  story: 'string',
                  playtime: 'number',
                  level: 'string',
                  image: 'string',
                  minPlayer: 'number',
                  maxPlayer: 'number',
                  note: 'string',
                  cafeName: 'string',
                  spotName: 'string',
                  address: 'string',
                  phone: 'string',
                  link: 'string',
                  genres: 'string[]',
                  isLiked: 'boolean',
                  isVisited: 'boolean',
                },
              },
            ],
          },
        },
      ],
    },
    POST: {
      '/review/like/{themeId}\n리뷰 좋아요': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
      ],
    },
    DELETE: {
      '/review/like/{themeId}\n리뷰 좋아요 취소': [
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
  Gathering: {
    GET: {
      '/gathering/{themeId}\n생성된 모임 조회': [
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
            page: 'number',
            size: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalPages: 'number',
            number: 'number',
            content: [
              {
                id: 'number',
                name: 'string',
                image: 'string',
                date: 'date',
                participantCount: 'number',
                capacity: 'number',
                title: 'string',
                address: 'string',
                genres: 'string[]',
                playtime: 'number',
                level: 'string',
                isLiked: 'boolean',
              },
            ],
          },
        },
      ],
    },
    POST: {
      '/gathering/like/{gatheringId}\n모임 좋아요': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
      ],
    },
    DELETE: {
      '/gathering/like/{gatheringId}\n모임 좋아요 취소': [
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
};
