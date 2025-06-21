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
      '/user/me\n내 프로필 조회': [
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
            comment: 'string',
            createdAt: 'string',
            email: 'string',
            emailMark: 'boolean',
            failCount: 'number',
            gender: 'string | null',
            genderMark: 'boolean',
            image: 'string',
            nickname: 'string',
            successCount: 'number',
            totalGathering: 'number',
            totalMakeGathering: 'number',
            totalTheme: 'number',
            updatedAt: 'string',
            representAchievement: 'string[]',
          },
        },
      ],
      '/user/{nickname}\n타인 프로필 조회': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
          },
        },
        {
          label: 'Responses',
          content: {
            comment: 'string',
            createdAt: 'string',
            email: 'string',
            emailMark: 'boolean',
            failCount: 'number',
            gender: 'string | null',
            genderMark: 'boolean',
            image: 'string',
            nickname: 'string',
            successCount: 'number',
            totalGathering: 'number',
            totalMakeGathering: 'number',
            totalTheme: 'number',
            updatedAt: 'string',
            representAchievement: 'string[]',
          },
        },
      ],
      '/user/schedule\n나의 일정': [
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
            date: [
              {
                gatheringId: 'number',
                name: 'string',
                address: 'string',
                spot: 'string',
                cafe: 'string',
                themeName: 'string',
                listImage: 'string',
                genres: 'string[]',
                playtime: 'number',
                level: 'string',
                dateTime: 'string',
                capacity: 'number',
                participantCount: 'number',
                isLiked: 'boolean',
              },
            ],
          },
        },
      ],
      '/user/me/theme\n내가 참여한 방탈출': [
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
            limit: 'number',
            offset: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: [
              {
                themeId: 'number',
                address: 'string',
                spot: 'string',
                cafe: 'string',
                themeName: 'string',
                listImage: 'string',
                level: 'string',
                genres: 'string[]',
                playtime: 'number',
                rating: 'number',
                reviewId: 'number',
                reviewCount: 'number',
                myRating: 'number',
                hint: 'number',
                numberOfPlayer: 'number',
                themeReview: 'string',
                levelReview: 'string',
                storyReview: 'string',
                reviewComment: 'string',
                success: 'boolean',
                isLiked: 'boolean',
                totalLikes: 'number',
              },
            ],
          },
        },
      ],
      '/user/me/theme/like\n내가 찜한 방탈출': [
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
            limit: 'number',
            offset: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: [
              {
                themeId: 'number',
                address: 'string',
                spot: 'string',
                cafe: 'string',
                themeName: 'string',
                listImage: 'string',
                level: 'string',
                genres: 'string[]',
                playtime: 'number',
                reviewCount: 'number',
                rating: 'number',
                isMarked: 'boolean',
              },
            ],
          },
        },
      ],
      '/user/me/gathering\n내가 참여한 모임': [
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
            limit: 'number',
            offset: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: [
              {
                userId: 'number',
                gatheringId: 'number',
                name: 'string',
                address: 'string',
                spot: 'string',
                cafe: 'string',
                themeId: 'number',
                themeName: 'string',
                listImage: 'string',
                genres: 'string[]',
                level: 'string',
                playtime: 'number',
                dateTime: 'string',
                capacity: 'number',
                participants: [
                  {
                    name: 'string',
                    image: 'string',
                  },
                ],
                registrationEnd: 'string',
                isLiked: 'boolean',
              },
            ],
          },
        },
      ],
      '/user/me/gathering/like\n내가 찜한 모임': [
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
            limit: 'number',
            offset: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: [
              {
                gatheringId: 'number',
                name: 'string',
                address: 'string',
                spot: 'string',
                cafe: 'string',
                themeId: 'number',
                listImage: 'string',
                themeName: 'string',
                genres: 'string[]',
                playtime: 'number',
                capacity: 'number',
                level: 'string',
                dateTime: 'string',
                participantCount: 'number',
                registrationEnd: 'string',
              },
            ],
          },
        },
      ],
      '/user/me/comment\n내가 쓴 댓글': [
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
            sortBy: 'create | new',
            limit: 'number',
            offset: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: {
              date: [
                {
                  gatheringId: 'number',
                  gatheringName: 'string',
                  content: 'string',
                  createdAt: 'string',
                },
              ],
            },
          },
        },
      ],
    },
    POST: {
      '/user/me/theme\n내가 참여한 방탈출 리뷰쓰기': [
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
            image: 'file',
            numberOfPlayer: 'number',
            success: 'boolean',
            hint: 'number',
            myRating: 'number',
            themeReview: 'string',
            levelReview: 'string',
            storyReview: 'string',
            reviewComment: 'string',
          },
        },
      ],
    },
    PATCH: {
      '/user/me\n내 프로필 수정': [
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
            image: 'file',
            nickname: 'string',
            comment: 'string',
            emailMark: 'boolean',
            genderMark: 'boolean',
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
            sortBy: 'rating | likes | reviews',
            keyword: 'string',
            state: 'string',
            city: 'string',
            genre: 'string',
            limit: 'number',
            offset: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: [
              {
                themeId: 'number',
                listImage: 'string',
                genres: 'string[]',
                playtime: 'number',
                themeName: 'string',
                cafe: 'string',
                spot: 'string',
                reviewCount: 'number',
                rating: 'number',
                address: 'string',
                level: 'string',
                isLiked: 'boolean',
                isMarked: 'boolean',
              },
            ],
          },
        },
      ],
      '/theme/{themeId}\n방탈출 상세 조회': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
          },
        },
        {
          label: 'Parameters',
          content: {
            themeId: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            themeId: 'number',
            detailImage: 'string',
            story: 'string',
          },
        },
      ],
      '/theme/search\n방탈출 검색': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
          },
        },
        {
          label: 'Parameters',
          content: {
            keyword: 'string',
            city: 'string',
            state: 'string',
          },
        },
        {
          label: 'Responses',
          content: {
            themeId: 'number',
            themeName: 'string',
            cafe: 'string',
            spot: 'string',
          },
        },
      ],
    },
    POST: {
      '/theme/{themeId}/like\n방탈출 찜': [
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
          },
        },
      ],
      '/theme/{themeId}/visit\n방탈출 참여': [
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
          },
        },
      ],
    },
    DELETE: {
      '/theme/{themeId}/like\n방탈출 찜 삭제': [
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
          },
        },
      ],
      '/theme/{themeId}/visit\n방탈출 참여 해제': [
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
          },
        },
      ],
    },
  },
  Review: {
    GET: {
      '/review\n리뷰 목록 조회': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
          },
        },
        {
          label: 'Parameters',
          content: {
            limit: 'number',
            offset: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: [
              {
                user: {
                  name: 'string',
                  image: 'string',
                },
                content: 'string',
                image: 'string',
                rating: 'number',
                success: 'boolean',
                themeReview: 'string',
                levelReview: 'string',
                storyReview: 'string',
                hint: 'number',
                createdAt: 'string',
                playUser: 'number',
                totalLikes: 'number',
                isLiked: 'boolean',
              },
            ],
          },
        },
      ],
      '/review/rating\n리뷰 총 평점 조회': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
          },
        },
        {
          label: 'Responses',
          content: {
            scoreCount: 'number',
            averageScore: 'number',
            score: 'number[]',
          },
        },
      ],
    },
    POST: {
      '/review\n리뷰 생성': [
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
            themeId: 'number',
            content: 'string',
            rating: 'number',
            success: 'boolean',
            image: 'file',
            hint: 'number',
            numberOfPlayer: 'number',
            themeReview: 'string',
            levelReview: 'string',
            storyReview: 'string',
          },
        },
      ],
      '/review/{reviewId}/like\n리뷰 좋아요': [
        {
          label: 'Headers',
          content: {
            ContentType: 'multipart/form-data',
            Authorization: 'Bearer {accessToken}',
          },
        },
      ],
    },
    PATCH: {
      '/review/{reviewId}\n내가 참여한 방탈출 리뷰수정': [
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
            content: 'string',
            image: 'file',
            numberOfPlayer: 'number',
            success: 'boolean',
            hint: 'number',
            myRating: 'number',
            themeReview: 'string',
            levelReview: 'string',
            storyReview: 'string',
          },
        },
      ],
    },
    DELETE: {
      '/review/{reviewId}\n리뷰 삭제': [
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
          },
        },
      ],
      '/review/{reviewId}/like\n리뷰 좋아요 취소': [
        {
          label: 'Headers',
          content: {
            ContentType: 'multipart/form-data',
            Authorization: 'Bearer {accessToken}',
          },
        },
      ],
    },
  },
  Gathering: {
    GET: {
      '/gathering\n모임 목록 조회': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
          },
        },
        {
          label: 'Parameters',
          content: {
            sortBy: 'dateTime | registrationEnd | participantCount',
            keyword: 'string',
            state: 'string',
            city: 'string',
            startDate: 'string',
            endDate: 'string',
            genre: 'string',
            limit: 'number',
            offset: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: [
              {
                gatheringId: 'number',
                name: 'string',
                listImage: 'string',
                genres: 'string[]',
                playtime: 'number',
                themeId: 'number',
                cafe: 'string',
                spot: 'string',
                dateTime: 'string',
                registrationEnd: 'string',
                capacity: 'number',
                participantCount: 'number',
                address: 'string',
                level: 'string',
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
          },
        },
        {
          label: 'Parameters',
          content: {
            gatheringId: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            gatheringId: 'number',
            name: 'string',
            detailImage: 'string',
            capacity: 'number',
            dateTime: 'string',
            registrationStart: 'string',
            registrationEnd: 'string',
            price: 'number',
            isIndividual: 'boolean',
            content: 'string',
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
            name: 'string',
            themeId: 'number',
            content: 'string',
            price: 'string',
            isIndividual: 'boolean',
            dateTime: 'string',
            registrationStart: 'string',
            registrationEnd: 'string',
            capacity: 'number',
          },
        },
      ],
      '/gathering/{gatheringId}/like\n모임 찜': [
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
            gatheringId: 'number',
          },
        },
      ],
    },
    PATCH: {
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
            themeId: 'number',
            content: 'string',
            price: 'string',
            dateTime: 'string',
            registrationStart: 'string',
            registrationEnd: 'string',
            capacity: 'number',
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
        {
          label: 'Parameters',
          content: {
            gatheringId: 'number',
          },
        },
      ],
      '/gathering/{gatheringId}/like\n모임 찜 삭제': [
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
            gatheringId: 'number',
          },
        },
      ],
    },
  },
  GatheringMember: {
    GET: {
      '/gathering/member\n모임 참가자 목록 조회': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
          },
        },
        {
          label: 'Parameters',
          content: {
            gatheringId: 'number',
          },
        },
        {
          label: 'Responses',
          content: [
            {
              image: 'string',
              nickname: 'string',
              comment: 'string',
              createdAt: 'string',
              updatedAt: 'string',
              representAchievement: 'string[]',
            },
          ],
        },
      ],
    },
    POST: {
      '/gathering/member\n모임 참여': [
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
            gatheringId: 'number',
          },
        },
      ],
    },
    DELETE: {
      '/gathering/member\n모임 참여 취소': [
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
            gatheringId: 'number',
          },
        },
      ],
    },
  },
  Comment: {
    GET: {
      '/comment\n모임 댓글 목록 조회': [
        {
          label: 'Headers',
          content: {
            ContentType: 'application/json',
          },
        },
        {
          label: 'Parameters',
          content: {
            gatheringId: 'number',
            limit: 'number',
            offset: 'number',
          },
        },
        {
          label: 'Responses',
          content: {
            totalCount: 'number',
            currentPage: 'number',
            data: [
              {
                commentId: 'number',
                nickname: 'string',
                image: 'string',
                content: 'string',
                createdAt: 'string',
                reComments: [
                  {
                    reCommentsId: 'number',
                    nickname: 'string',
                    image: 'string',
                    content: 'string',
                    createdAt: 'string',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    POST: {
      '/comment\n모임 댓글 작성': [
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
            gatheringId: 'number',
          },
        },
        {
          label: 'Request Body',
          content: {
            content: 'string',
          },
        },
      ],
    },
    PATCH: {
      '/comment/{commentId}\n모임 댓글 수정': [
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
            gatheringId: 'number',
            commentId: 'number',
          },
        },
        {
          label: 'Request Body',
          content: {
            content: 'string',
          },
        },
      ],
    },
    DELETE: {
      '/comment/{commentId}\n모임 댓글 삭제': [
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
            gatheringId: 'number',
            commentId: 'number',
          },
        },
      ],
    },
  },
};
