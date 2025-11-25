# Green Wire Frontend

AI를 활용한 증권 분석 웹 애플리케이션의 프론트엔드입니다.

## 기술 스택

| 카테고리 | 기술 |
|---------|------|
| **Framework** | Next.js 16, React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **State Management** | Zustand 5 |
| **Data Fetching** | TanStack Query (React Query) 5 |
| **UI Components** | Radix UI, shadcn/ui |
| **Charts** | Lightweight Charts 5 |
| **Form** | React Hook Form |
| **Testing** | Jest, Playwright |

## 프로젝트 구조

```
frontend/
├── app/                      # Next.js App Router
│   ├── (afterLogin)/         # 인증 후 접근 가능한 페이지
│   │   ├── dashboard/[symbol]/  # 종목 상세 대시보드
│   │   ├── main/             # 메인 페이지 (종목 리스트 + 뉴스)
│   │   ├── news-analysis/[id]/  # 뉴스 분석 페이지
│   │   ├── reports/[id]/     # AI 분석 레포트
│   │   ├── profile/          # 프로필 설정
│   │   ├── settings/         # 앱 설정
│   │   └── watchlist/        # 관심 종목
│   ├── (beforeLogin)/        # 비인증 페이지
│   │   ├── login/            # 로그인
│   │   ├── register/         # 회원가입
│   │   └── auth/             # 소셜 로그인 콜백
│   ├── layout.tsx            # 루트 레이아웃
│   ├── providers.tsx         # 전역 Provider 설정
│   └── globals.css           # 전역 스타일
│
├── features/                 # Feature-based 모듈
│   ├── auth/                 # 인증 관련
│   ├── dashboard/            # 대시보드 (차트, 종목 정보)
│   ├── main/                 # 메인 페이지 (종목 리스트, 뉴스)
│   ├── news/                 # 뉴스 분석
│   ├── reports/              # AI 레포트
│   └── subscriptions/        # 구독 관리
│
├── components/               # 공통 컴포넌트
│   ├── ui/                   # shadcn/ui 기본 컴포넌트
│   ├── notifications/        # 알림 관련 컴포넌트
│   └── reports/              # 레포트 관련 컴포넌트
│
├── shared/                   # 공유 컴포넌트
│   └── components/           # Header, Footer, Layout 등
│
├── store/                    # Zustand 상태 관리
│   ├── auth-store.ts         # 인증 상태
│   ├── stock-store.ts        # 종목/관심종목 상태
│   ├── chart-settings-store.ts  # 차트 설정
│   └── notification-store.ts # 알림 상태
│
├── hooks/                    # 커스텀 훅
│   └── useNotifications.ts   # SSE 알림 훅
│
├── lib/                      # 유틸리티
│   ├── api-client.ts         # Axios API 클라이언트
│   └── utils.ts              # 공통 유틸리티
│
├── types/                    # TypeScript 타입 정의
├── constants/                # 상수 정의
├── e2e/                      # Playwright E2E 테스트
└── public/                   # 정적 파일
```

## 주요 기능

### 1. 인증 시스템
- 일반 로그인/회원가입
- 소셜 로그인 (카카오, 구글)
- HttpOnly 쿠키 기반 JWT 인증
- 자동 토큰 갱신

### 2. 종목 분석
- 실시간 주가 차트 (Lightweight Charts)
- 종목 검색 및 필터링
- 카테고리별 종목 분류 (기술, 금융, 의료 등)
- 관심종목 관리

### 3. 뉴스 분석
- AI 기반 뉴스 감성 분석 (긍정/부정/중립)
- 한국어 번역 및 요약
- 종목별 관련 뉴스
- AI 종합 분석 레포트 생성

### 4. 알림 시스템
- SSE (Server-Sent Events) 기반 실시간 알림
- 레포트 생성 완료 알림
- 브라우저 알림 지원

### 5. 반응형 디자인
- 모바일, 태블릿, 데스크톱 최적화
- 다크/라이트 모드 지원

## 시작하기

### 요구사항

- Node.js 18+
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm run start
```

### 환경 변수

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 실행 |
| `npm run test` | Jest 단위 테스트 |
| `npm run test:watch` | Jest 감시 모드 |
| `npm run test:coverage` | 테스트 커버리지 |
| `npm run test:e2e` | Playwright E2E 테스트 |
| `npm run test:e2e:ui` | Playwright UI 모드 |
| `npm run analyze` | 번들 분석 |

## 아키텍처 패턴

### Feature-based Architecture

각 기능은 독립적인 모듈로 구성됩니다:

```
features/[feature]/
├── components/       # UI 컴포넌트 (Presentational)
├── containers/       # 컨테이너 컴포넌트 (로직 관리)
├── hooks/           # 커스텀 훅
├── services/        # API 호출 및 비즈니스 로직
└── constants/       # 상수
```

### Container-Presentational Pattern

- **Container**: 상태 관리 및 비즈니스 로직
- **Presentational**: UI 렌더링만 담당

### State Management

- **Zustand**: 전역 상태 (인증, 종목, 설정)
- **React Query**: 서버 상태 (API 데이터 캐싱)
- **Local State**: 컴포넌트 상태 (UI 상태)

## API 통신

`lib/api-client.ts`에서 Axios 인스턴스를 사용합니다:

```typescript
import apiClient from '@/lib/api-client';

// 예시: 뉴스 조회
const news = await apiClient.getStockNews('AAPL', 10);

// 예시: 로그인
const tokens = await apiClient.login({ email, password });
```

### 주요 API 메서드

| 메서드 | 설명 |
|--------|------|
| `login()` | 로그인 |
| `register()` | 회원가입 |
| `socialLogin()` | 소셜 로그인 |
| `getMe()` | 사용자 정보 조회 |
| `getAllTradableStocks()` | 종목 리스트 |
| `getBatchQuotes()` | 실시간 시세 |
| `getChartData()` | 차트 데이터 |
| `getStockNews()` | 종목 뉴스 |
| `createNewsReport()` | AI 레포트 생성 |

## 테스트

### 단위 테스트 (Jest)

```bash
# 모든 테스트 실행
npm run test

# 특정 파일 테스트
npm run test -- auth-store.test.ts

# 커버리지 리포트
npm run test:coverage
```

### E2E 테스트 (Playwright)

```bash
# E2E 테스트 실행
npm run test:e2e

# UI 모드로 실행
npm run test:e2e:ui

# 리포트 확인
npm run test:e2e:report
```

## 코드 스타일

- ESLint + Next.js 권장 설정
- TypeScript strict 모드
- Tailwind CSS 유틸리티 클래스

## 라이선스

Private - All Rights Reserved
