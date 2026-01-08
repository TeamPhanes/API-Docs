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
      '/user/me/profile\n내 프로필 조회': [
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
            email: 'string',
            profileComment: 'string',
            profileImage: 'string',
            createdAt: 'date',
            updatedAt: 'date',
            createGatheringCount: 'number',
            visitGatheringCount: 'number',
            visitThemeCount: 'number',
            successThemeCount: 'number',
            achievements: [
              {
                id: 'number',
                progress: 'number',
                isRepresentative: 'boolean',
                completedAt: 'date',
              },
            ],
          },
        },
      ],
      '/user/{userId}\n다른 유저 조회': [
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
            email: 'string',
            profileComment: 'string',
            profileImage: 'string',
            createdAt: 'date',
            updatedAt: 'date',
            createGatheringCount: 'number',
            visitGatheringCount: 'number',
            visitThemeCount: 'number',
            successThemeCount: 'number',
            achievements: [
              {
                id: 'number',
                progress: 'number',
                isRepresentative: 'boolean',
                completedAt: 'date',
              },
            ],
          },
        },
      ],
      '/user/me/theme/visit\n참여한 방탈출 조회': [
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
                title: 'string',
                cafeName: 'string',
                spotName: 'string',
                image: 'string',
                genres: 'string[]',
                visitDate: 'date',
                score: 'number',
                themeReview: 'string',
                levelReview: 'string',
                storyReview: 'string',
                hint: 'number',
                numberOfPlayer: 'number',
                isSuccess: 'boolean',
                content: 'string',
                reviewImages: [
                  {
                    id: 'number',
                    image: 'string',
                  },
                ],
              },
            ],
          },
        },
      ],
      '/user/me/gathering/visit\n참여한 모임 조회': [
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
                genres: 'string[]',
                title: 'string',
                cafeName: 'string',
                spotName: 'string',
                address: 'string',
                playtime: 'number',
                level: 'string',
                image: 'string',
                name: 'string',
                date: 'date',
                capacity: 'number',
                participants: [
                  {
                    id: 'number',
                    profileImage: 'string',
                    nickname: 'string',
                    email: 'string',
                  },
                ],
                isLiked: 'boolean',
              },
            ],
          },
        },
      ],
      '/user/me/schedule\n내 스케줄 조회': [
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
            view: 'monthly | weekly',
            date: 'date',
          },
        },
        {
          label: 'Responses',
          content: {
            id: 'number',
            name: 'string',
            participantCount: 'number',
            capacity: 'number',
            date: 'date',
            title: 'string',
            image: 'string',
            playtime: 'number',
            level: 'string',
            address: 'string',
            genres: 'string[]',
            isLiked: 'boolean',
          },
        },
      ],
    },
  },
  Notice: {
    GET: {
      '/notice\n공지사항 목록 조회': [
        {
          label: 'Responses',
          content: [
            {
              id: 'number',
              title: 'string',
              createdAt: 'string',
            },
          ],
        },
      ],
      '/notice/{id}\n공지사항 조회': [
        {
          label: 'Responses',
          content: [
            {
              title: 'string',
              content: 'string',
              createdAt: 'string',
            },
          ],
        },
      ],
    },
    POST: {
      '/notice/image\n본문 이미지 임시 저장': [
        {
          label: 'Headers',
          content: {
            ContentType: 'multipart/form-data',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Request Body',
          content: {
            image: 'multipart',
          },
        },
      ],
      '/notice\n공지사항 저장': [
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
      '/notice\n공지사항 삭제': [
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
  Cafe: {
    GET: {
      '/cafe\n카페 목록 조회': [
        {
          label: 'Responses',
          content: {
            id: 'number',
            name: 'string',
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
      '/theme/preview\n방탈출 프리뷰 조회': [
        {
          label: 'Parameters',
          content: {
            page: 'number',
            size: 'number',
            sort: 'string[]',
            genre: 'string',
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
                image: 'string',
              },
            ],
          },
        },
      ],
      'theme/suggest\n방탈출 이름 검색': [
        {
          label: 'Parameters',
          content: {
            size: 'number',
            keyword: 'string',
            cursor: 'encoded string',
          },
        },
        {
          label: 'Responses',
          content: {
            cursor: {
              id: 'string',
              score: 'number',
            },
            contents: [
              {
                id: 'number',
                title: 'string',
                spotName: 'string',
              },
            ],
          },
        },
      ],
      '/theme/search\n방탈출 검색': [
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
            size: 'number',
            keyword: 'string',
            locations: 'string[]',
            genres: 'string[]',
            cursor: 'encoded string',
          },
        },
        {
          label: 'Responses',
          content: {
            cursor: {
              id: 'string',
              score: 'number',
            },
            contents: [
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
      '/review/summary/{themeId}\n리뷰 요약 정보 조회': [
        {
          label: 'Responses',
          content: {
            avgScore: 'number',
            createdGatheringCount: 'number',
            reviewCountSummary: {
              total: 'number',
              counts: [
                {
                  score: 'number',
                  count: 'number',
                },
              ],
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
          },
        },
      ],
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
                id: 'number',
                nickname: 'string',
                profileImage: 'string',
                score: 'score',
                content: 'string',
                images: [
                  {
                    id: 'number',
                    image: 'string',
                  },
                ],
                isSuccess: 'boolean',
                hint: 'number',
                numberOfPlayer: 'number',
                themeReview: 'string',
                levelReview: 'string',
                storyReview: 'string',
                likeCount: 'number',
                isLiked: 'boolean',
                createdAt: 'date',
              },
            ],
          },
        },
      ],
    },
    POST: {
      '/review/{themeId}\n리뷰 저장': [
        {
          label: 'Headers',
          content: {
            ContentType: 'multipart/form-data',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Request Body',
          content: {
            review: {
              score: 'number',
              themeReview: 'enum(LIKE, NORMAL, DISLIKE)',
              levelReview: 'enum(LIKE, NORMAL, DISLIKE)',
              storyReview: 'enum(LIKE, NORMAL, DISLIKE)',
              isSuccess: 'boolean',
              numberOfPlayer: 'number',
              hint: 'number',
              content: 'string',
              date: 'date',
            },
            images: 'multipart{}',
          },
        },
      ],
      '/review/like/{reviewId}\n리뷰 좋아요': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
      ],
    },
    PUT: {
      '/review/{reviewId}\n리뷰 수정': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Request Body',
          content: {
            review: {
              score: 'number',
              themeReview: 'enum(LIKE, NORMAL, DISLIKE)',
              levelReview: 'enum(LIKE, NORMAL, DISLIKE)',
              storyReview: 'enum(LIKE, NORMAL, DISLIKE)',
              isSuccess: 'boolean',
              numberOfPlayer: 'number',
              hint: 'number',
              content: 'string',
              representativeId: 'string',
              deleteImageIds: 'number[]',
              date: 'date',
            },
            images: 'multipart{}',
          },
        },
      ],
    },
    DELETE: {
      '/review/like/{reviewId}\n리뷰 좋아요 취소': [
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
      '/gathering\n모임 조회': [
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
            themeId: 'number',
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
      '/gathering/like\n모임 좋아요 목록 조회': [
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
      '/gathering/{gatheringId}\n모임 상세 조회': [
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
            id: 'number',
            name: 'string',
            capacity: 'number',
            date: 'date',
            registrationStart: 'date',
            registrationEnd: 'date',
            content: 'string',
            image: 'string',
            price: 'number',
            isIndividual: 'boolean',
            participantCount: 'number',
            participants: [
              {
                id: 'number',
                profileImage: 'string',
                nickname: 'string',
                email: 'string',
                role: 'string',
              },
            ],
            title: 'string',
            genres: 'string[]',
            isLiked: 'boolean',
          },
        },
      ],
      '/gathering/date\n같은 일정 다른 모임 조회': [
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
            date: 'date',
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
      '/gathering/comment\n댓글 조회': [
        {
          label: 'Parameters',
          content: {
            gatheringId: 'number',
            page: 'number',
            size: 'number',
            sort: 'string[]',
          },
        },
        {
          label: 'Responses',
          content: {
            comments: [
              {
                id: 'number',
                userId: 'number',
                content: 'string',
                createdAt: 'date',
                updatedAt: 'date',
                nickname: 'string',
                profileImage: 'string',
                email: 'string',
                comments: [
                  {
                    id: 'number',
                    userId: 'number',
                    content: 'string',
                    createdAt: 'date',
                    updatedAt: 'date',
                    nickname: 'string',
                    profileImage: 'string',
                    email: 'string',
                  },
                ],
              },
            ],
          },
        },
      ],
      '/gathering/search\n모임 검색': [
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
            size: 'number',
            keyword: 'string',
            locations: 'string[]',
            genres: 'string[]',
            cursor: 'encoded string',
          },
        },
        {
          label: 'Responses',
          content: {
            cursor: {
              id: 'string',
              score: 'number',
            },
            contents: [
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
      '/gathering\n모임 생성': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Request Body',
          content: {
            themeId: 'number',
            name: 'string',
            capacity: 'number',
            date: 'date',
            registrationStart: 'date',
            registrationEnd: 'date',
            content: 'string',
            isIndividual: 'boolean',
            price: 'number',
          },
        },
      ],
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
    PUT: {
      '/gathering/{gatheringId}\n모임 수정': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
        {
          label: 'Request Body',
          content: {
            name: 'string',
            capacity: 'number',
            date: 'date',
            registrationStart: 'date',
            registrationEnd: 'date',
            content: 'string',
            isIndividual: 'boolean',
            price: 'number',
          },
        },
      ],
    },
    DELETE: {
      '/gathering/{gatheringId}\n모임 삭제': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
            Authorization: 'Bearer {accessToken}',
          },
        },
      ],
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
