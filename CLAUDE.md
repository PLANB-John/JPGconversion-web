# CLAUDE.md

이 파일은 Claude가 이 저장소에서 작업할 때 따르는 프로젝트 지침입니다.
(이전에는 Codex로 작업했으며, `codex/...` 브랜치와 PR #86까지가 그 기록입니다.)

## 프로젝트 개요

- **서비스**: Global Tools Hub — 브라우저에서 바로 쓰는 이미지·웹마케팅·개발자 도구 + 도구별 가이드 글 모음
- **도메인**: https://www.tooliova.com (`src/data/site.ts`의 `baseUrl`)
- **저장소**: `PLANB-John/JPGconversion-web` (이름은 JPG 변환이지만 실제로는 다목적 도구 허브)
- **배포**: GitHub → Vercel 자동 배포. `main`에 머지되면 프로덕션 배포, 다른 브랜치는 Vercel 미리보기 URL 생성
- **수익화**: Google AdSense (자동 광고 스크립트만 삽입된 상태, 수동 광고 단위 없음)
- **언어**: 6개 — `en`(기본), `ko`, `ja`, `es`, `fr`, `de`

## 기술 스택과 명령어

- Next.js 15.3 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 3 · ESLint 9
- 패키지 매니저: npm (lockfile 없음)
- 경로 별칭: `@/` → `src/`

```bash
npm install
npm run dev     # 로컬 개발 서버
npm run build   # 프로덕션 빌드 (타입 체크 포함) — 커밋 전 필수 확인
npm run lint
```

테스트 코드는 없습니다. 변경 후 검증은 `npm run build` 통과 + 해당 페이지를 6개 언어 모두에서 확인하는 것으로 합니다. 로컬 빌드를 돌릴 수 없는 환경이면 PR의 Vercel 미리보기 빌드 결과로 확인합니다.

## 작업 흐름

1. 작업마다 `claude/<작업-요약>` 브랜치를 만든다 (예: `claude/add-qr-code-generator`).
2. 커밋 메시지는 기존 스타일을 따른다: 영어, 동사로 시작하는 한 줄 요약
   (예: `Add multilingual Punycode guide cluster and tool hub support content`).
3. PR을 열면 Vercel이 미리보기 URL을 만든다. 사용자가 미리보기에서 확인한 뒤 `main`에 머지한다.
4. 사용자가 명시적으로 요청하지 않는 한 `main`에 직접 푸시하지 않는다.
5. 한 PR에는 한 가지 목적만 담는다 (도구 하나, 가이드 묶음 하나, 디자인 변경 하나 등).

## 디렉터리 구조

```
src/
  app/
    layout.tsx                 # 루트: AdSense 스크립트, GA, adsense 메타 태그
    page.tsx, tools/page.tsx   # /en, /en/tools 로 리다이렉트
    [locale]/                  # 모든 실제 페이지는 언어 경로 아래
      layout.tsx               # Header / Footer
      page.tsx                 # 홈
      tools/<slug>/page.tsx    # 도구 페이지 (도구마다 하나)
      guides/page.tsx, guides/[slug]/page.tsx
      categories/[slug]/page.tsx
      about, contact, privacy-policy, terms-of-use
    api/                       # 서버 프록시가 필요한 도구만 (og-preview, website-image-extractor, website-screenshot)
    sitemap.ts, robots.ts      # 도구·가이드 데이터에서 자동 생성
  components/
    tools/<Name>Tool.tsx       # 도구 UI ("use client")
    tools/ToolHubSupportSection.tsx  # 도구 하단 "언제 쓰나 / 빠른 단계 / 흔한 실수 / 관련 가이드" 섹션
    guides/                    # 가이드 카드·본문
    AdSense.tsx, Analytics.tsx, Header.tsx, Footer.tsx ...
  data/
    tools.ts                   # 도구 목록·카테고리·다국어 이름/설명
    guides.ts                  # 모든 가이드 본문 (약 7,000줄, 138개)
    <camelName>Messages.ts     # 도구별 UI 문구 (6개 언어)
    messages.ts, trustMessages.ts, siteExperience.ts  # 공통 문구
    locales.ts, site.ts
  lib/
    seo.ts                     # 메타데이터·canonical·hreflang 헬퍼
    i18n.ts                    # isValidLocale 등
    color.ts, punycode.js
public/ads.txt                 # AdSense 판매자 인증
```

## 다국어 규칙 (가장 중요)

- 사용자에게 보이는 문구는 컴포넌트에 하드코딩하지 않는다. 항상 `src/data/` 의 메시지 파일에 6개 언어 모두 넣는다.
- 새 문구를 추가할 때는 메시지 타입에 필드를 추가 → 6개 언어 모두 채우기. 하나라도 빠지면 타입 에러가 나거나 영어로 대체된다.
- 번역은 직역보다 각 언어 사용자가 실제로 검색할 법한 자연스러운 표현으로 쓴다.
- 기존 가이드 중 상당수는 `ko/ja/es/fr/de`가 `title`, `description`, `intro`만 번역하고 본문(`sections` 등)은 `...xxxEn`을 펼쳐 영어로 남아 있다. **새 가이드는 본문까지 전부 번역한다.** 기존 가이드의 본문 번역 보강은 별도 작업으로 다룬다.
- 페이지 함수는 항상 `isValidLocale(locale)`로 검사하고, 아니면 `notFound()`.

## 가이드 추가하는 법

모든 가이드는 `src/data/guides.ts` 한 파일에 있다.

1. 파일 상단 `GuideSlug` 유니온 타입에 새 슬러그 추가 (kebab-case, 검색 키워드형 문장: `why-webp-image-looks-blurry`).
2. 본문 상수 작성:
   - `const xxxEn: GuideLocalizedContent = { title, description, intro, categoryLabel, useCasesTitle, useCases, closingTitle, closingText, relatedToolLabel, sections: [{ heading, paragraphs, bullets? }] }`
   - `const xxxContent: Record<LocaleCode, GuideLocalizedContent> = { en, ko, ja, es, fr, de }` — 6개 언어 모두 전체 번역.
3. `guideDefinitions` 배열에 항목 추가:
   ```ts
   {
     slug: "new-guide-slug",
     category: "developer",            // "color-image" | "web-marketing" | "developer"
     relatedToolSlug: "json-formatter",
     relatedGuideSlugs: ["...", "..."], // 같은 주제의 가이드 2개
     publishedAt: "YYYY-MM-DD",          // 실제 작성일
     updatedAt: "YYYY-MM-DD",
     content: newGuideSlugContent
   }
   ```
4. 해당 도구 페이지 `src/app/[locale]/tools/<slug>/page.tsx`의 `relatedGuideSlugs` 배열에 넣어 도구 하단에 노출시킨다.
5. 사이트맵은 자동 반영된다.

**글쓰기 기준**: 실무형 문제 해결 글. 섹션 4~6개, 문단은 짧게, 구체적인 예시와 숫자 포함. 내용 없는 서론·반복 문장 금지 (AdSense의 "가치 없는 콘텐츠" 판정을 피하기 위함). 기존에는 도구 하나당 가이드 3~6개를 묶어 "가이드 허브 강화" 단위로 작업했다.

`guides.ts`가 매우 크므로 수정할 때는 필요한 부분만 찾아 읽는다. 파일 분리 리팩터링은 사용자가 요청할 때만 한다.

## 새 도구 추가하는 법

슬러그 예: `qr-code-generator`, 이름 예: `QrCodeGenerator`

1. `src/data/tools.ts`
   - `toolDefinitions`에 `{ slug, category, featured }` 추가
   - `liveToolRoutes`에 `"slug": "slug"` 추가 (없으면 "Coming Soon" 처리됨)
   - `localizedToolContent`의 6개 언어에 `{ name, description }` 추가
2. `src/data/qrCodeGeneratorMessages.ts` 생성 — 기존 `punycodeConverterMessages.ts` 패턴 그대로:
   타입 정의(메타데이터, 제목, 설명, 지원 섹션 필드, howToUse, UI 라벨, 오류/성공 메시지) → 6개 언어 객체 → `getQrCodeGeneratorMessages(locale)` 내보내기.
3. `src/components/tools/QrCodeGeneratorTool.tsx` 생성 — `"use client"`, props `{ messages, locale, relatedGuides }`, 하단에 `ToolHubSupportSection` 사용.
4. `src/app/[locale]/tools/qr-code-generator/page.tsx` 생성 — 기존 도구 페이지 복사: `generateMetadata`에서 `buildToolMetadata(locale, slug)`, 본문에서 `relatedGuideSlugs` 매핑.
5. 관련 가이드 3개 이상을 함께 추가한다 (위 가이드 절차).

**도구 설계 원칙**
- 가능하면 100% 브라우저에서 처리한다 (파일 업로드 없음 = 개인정보 안전, 서버 비용 0). 이 점을 UI 문구에서도 강조해 왔다.
- 외부 사이트를 가져와야 하는 경우에만 `src/app/api/<slug>/route.ts`를 만든다. 반드시 기존 라우트처럼 http/https만 허용하고 `localhost`·사설 IP를 차단해 SSRF를 막는다.
- 무거운 라이브러리는 동적 import로 해당 도구 페이지에서만 로드한다.
- 카테고리 키는 `developer`이지만 카테고리 페이지 URL 슬러그는 `developer-tools`다 (`categories/[slug]/page.tsx`). 헷갈리지 말 것.

## 디자인 / UI

- 현재 스타일: Tailwind 기본 `slate` 팔레트, 흰 배경 카드 `rounded-2xl border border-slate-200 bg-white shadow-sm`, 콘텐츠 폭 `max-w-6xl`, 라이트 모드만.
- `tailwind.config.ts`의 `theme.extend`는 비어 있다 — 브랜드 색·폰트·간격 같은 디자인 토큰이 아직 없다.
- 디자인 개편 시 순서: (1) 색·폰트·반경 토큰을 `tailwind.config.ts`와 `globals.css`에 먼저 정의 → (2) 공통 컴포넌트(Header, Footer, ToolCard, ToolHubSupportSection, SectionTitle) 적용 → (3) 도구 페이지들. 21개 도구 컴포넌트에 클래스가 반복되어 있으므로 공통 컴포넌트로 묶는 리팩터링을 함께 고려한다.
- 모바일(375px) 우선으로 확인한다. 도구 사용 영역이 첫 화면에 보여야 한다.
- 레이아웃 이동(CLS)을 만드는 요소(광고 포함)는 공간을 미리 확보한다.

## Google AdSense

- 게시자 ID `ca-pub-7078124525466670`는 세 곳에 있다: `src/components/AdSense.tsx`, `src/app/layout.tsx`의 `google-adsense-account` 메타, `public/ads.txt`. **절대 바꾸지 않으며, 바꿔야 하면 세 곳을 함께 바꾼다.**
- 현재는 자동 광고 스크립트만 있다. 수동 광고 단위를 추가할 때는:
  - 재사용 가능한 `AdSlot` 클라이언트 컴포넌트로 만들고 `<ins class="adsbygoogle">` + `(adsbygoogle = window.adsbygoogle || []).push({})` 패턴 사용
  - 고정 최소 높이로 자리를 확보해 CLS 방지
  - 도구 입력창·버튼·다운로드 버튼 바로 옆에 두지 않는다 (실수 클릭 유도는 정책 위반)
  - 광고임을 오해하게 만드는 라벨·디자인 금지, 광고 클릭 유도 문구 금지
- 유럽 사용자(fr/de/es 등 EEA·영국)에게 개인 맞춤 광고를 보여주려면 Google 인증 CMP(동의 관리 플랫폼)가 필요하다. AdSense의 "개인정보 보호 및 메시지" 기능을 쓰는 것이 가장 간단하다.
- 광고·쿠키 관련 변경 시 `privacy-policy` 페이지 문구(6개 언어)도 함께 갱신한다.

## 팝업 / 전면 광고 주의사항

- **AdSense 광고를 직접 만든 팝업·모달·오버레이 안에 넣는 것은 AdSense 정책 위반이다.** 계정 정지 위험이 있으므로 하지 않는다.
- 전면형 광고가 필요하면 AdSense 자동 광고의 **전면 광고(vignette)**·**앵커 광고** 형식을 AdSense 관리 화면에서 켜는 방식을 쓴다 (코드 변경 거의 없음).
- 페이지 진입 직후 본문을 가리는 팝업은 Google 검색의 "방해가 되는 전면 광고" 기준에 걸려 SEO에 불리하다.
- 광고가 아닌 자체 안내 팝업(예: 새 도구 소개, 북마크 유도)을 만들 경우: 도구를 한 번 사용한 뒤 등 사용자 행동 후에만 표시, 닫기 버튼 명확, 하루 1회 등 빈도 제한(`localStorage`), 모바일에서는 화면 일부만 차지하는 배너형.

## 환경 변수 (`.env.example` 참고)

- `NEXT_PUBLIC_SITE_URL` — canonical·hreflang·사이트맵 기준 URL (없으면 Vercel URL → `siteConfig.baseUrl` 순으로 대체)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Search Console 인증
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 (비어 있으면 GA 비활성)

값은 Vercel 프로젝트 설정에 있다. `.gitignore`가 `.env*.local`만 무시하므로 **`.env` 파일은 만들지 말고 `.env.local`을 쓴다.** 비밀 값은 절대 커밋하지 않는다.

## SEO

- 메타데이터는 항상 `src/lib/seo.ts`의 `buildLocalizedMetadata` / `buildToolMetadata`를 쓴다 (canonical + 6개 언어 hreflang + x-default 자동 처리).
- 새 정적 페이지를 만들면 `src/app/sitemap.ts`의 `staticLocalizedPages`에 추가한다. 도구·가이드는 자동.
- 슬러그는 한 번 배포되면 바꾸지 않는다 (검색 색인·링크 깨짐). 바꿔야 하면 `next.config.ts`에 리다이렉트를 추가한다.

## 기타

- `SETUP_GUIDE.md`는 프로젝트 초기 세팅 문서로, 현재 구조와 다를 수 있다.
- `website-screenshot` 도구는 외부 서비스 `image.thum.io`를 사용한다.
