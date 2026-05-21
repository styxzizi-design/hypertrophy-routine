# 💪 근비대 루틴 생성기 · Hypertrophy Routine Generator

<p align="center">
  <img src="https://img.shields.io/badge/language-HTML%20%7C%20CSS%20%7C%20JS-6c63ff?style=flat-square" />
  <img src="https://img.shields.io/badge/i18n-한%20·%20EN%20·%20中%20·%20日-a78bfa?style=flat-square" />
  <img src="https://img.shields.io/badge/theme-dark%20%2F%20light-22222e?style=flat-square" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" />
</p>

> 운동 경력 · 목표 부위 · 장비 조건을 선택하면  
> 세트·횟수·휴식·팁까지 포함된 맞춤 근비대 주간 루틴을 즉시 생성합니다.

---

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 🎯 맞춤 루틴 생성 | 레벨(초/중/고) × 주 2~6일 × 6개 목표 부위 × 3가지 장비 조합 |
| 🌍 4개 언어 지원 | 한국어 · English · 中文(简体) · 日本語 — 운동명까지 전부 번역 |
| 🌙 다크 / 라이트 테마 | 토글 한 번으로 전환, 선택값 브라우저에 저장 |
| 📋 주간 스플릿 자동 선택 | PPL · 상하체 분리 · 전신 · 브로스플릿 등 일수에 맞게 자동 배분 |
| 💡 레벨별 핵심 팁 | 초/중/고급 각 3가지 근비대 원칙 제공 |
| ⚡ 서버리스 · 완전 무료 | 순수 정적 파일 — 백엔드 없음, 운영 비용 $0 |

---

## 🖥️ 미리보기

```
[ 한 | EN | 中 | 日 ]                              [ 🌙 ]

        💪 근비대 루틴 생성기
   AI가 나에게 맞는 근비대 운동 루틴을 짜드립니다

  ┌─────────────────────────────────────────────┐
  │ 운동 경력                                    │
  │  ┌────────┐  ┌────────┐  ┌────────┐         │
  │  │  초급  │  │  중급  │  │  고급  │         │
  │  └────────┘  └────────┘  └────────┘         │
  └─────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────┐
  │ 주간 운동 일수           주 4일              │
  │  ━━━━━━━━━━●━━━━━━                          │
  │  2    3    4    5    6                       │
  └─────────────────────────────────────────────┘

  [ 가슴 ✓ ]  [ 등 ✓ ]  [ 하체 ✓ ]  [ 어깨 ]  [ 팔 ]  [ 복근 ]

         ┌──────────────────────────┐
         │      루틴 생성하기       │
         └──────────────────────────┘
```

---

## 🏋️ 지원 운동 & 스플릿

### 주간 스플릿
| 일수 | 스플릿 방식 |
|------|------------|
| 2일 | 전신 A / 전신 B |
| 3일 | Push / Pull / Legs |
| 4일 | 상체 A / 하체 A / 상체 B / 하체 B |
| 5일 | 가슴+삼두 / 등+이두 / 하체 / 어깨+복근 / 전신 컴파운드 |
| 6일 | Push A·B / Pull A·B / Legs A·B |

### 장비별 운동 DB
- **헬스장** — 바벨 · 덤벨 · 머신 · 케이블 전 종목
- **홈짐** — 덤벨 · 바벨 · 풀업바 기반 종목
- **맨몸** — 자체 중량만으로 가능한 종목

---

## 🚀 빠른 시작

### 로컬 실행 (서버 불필요)
```bash
# 저장소 클론
git clone https://github.com/styxzizi-design/hypertrophy-routine.git
cd hypertrophy-routine

# index.html 을 브라우저로 바로 열기
open index.html          # macOS
start index.html         # Windows
xdg-open index.html     # Linux
```

### GitHub Pages 배포
```bash
# Settings → Pages → Branch: master / (root) 선택
# 자동으로 https://styxzizi-design.github.io/hypertrophy-routine 에 배포됨
```

---

## 📁 프로젝트 구조

```
hypertrophy-routine/
├── index.html      # 마크업 + 폼 구조
├── style.css       # CSS 변수 기반 다크/라이트 테마, 반응형
├── script.js       # 루틴 생성 엔진 + 다국어 + 이벤트 처리
├── PRD.md          # 제품 요구사항 문서
└── README.md       # 이 파일
```

---

## 🛠️ 기술 스택

- **프론트엔드:** Vanilla HTML · CSS · JavaScript (의존성 0)
- **상태 관리:** `localStorage` (언어 · 테마 설정 유지)
- **국제화:** 자체 구현 (`T` 객체 + `EXERCISE_T` 운동명 번역 테이블)
- **빌드 도구:** 없음 — 파일 그대로 브라우저에서 동작
- **호스팅:** GitHub Pages / Vercel Free Tier

---

## 🌐 다국어 지원

운동명, UI 레이블, 운동 팁 등 **모든 텍스트**가 4개 언어로 제공됩니다.

```js
// 언어 추가 예시 — T 객체에 새 언어 키를 추가하면 됩니다
const T = {
  ko: { title: '💪 근비대 루틴 생성기', ... },
  en: { title: '💪 Hypertrophy Routine Generator', ... },
  zh: { title: '💪 增肌训练计划生成器', ... },
  ja: { title: '💪 筋肥大ルーティン生成器', ... },
};
```

---

## 📅 로드맵

- [x] 루틴 생성 엔진 (v1.0)
- [x] 4개 언어 지원
- [x] 다크 / 라이트 테마
- [x] GitHub 배포
- [ ] 루틴 URL 공유 기능 (v1.1)
- [ ] 인쇄 / PDF 내보내기 (v1.1)
- [ ] 운동 GIF 가이드 (v1.2)
- [ ] PWA 오프라인 지원 (v1.2)
- [ ] 운동 일지 연동 (v2.0)

---

## 🤝 기여 방법

1. 이 저장소를 Fork 합니다.
2. 새 브랜치를 생성합니다. (`git checkout -b feat/기능명`)
3. 변경사항을 커밋합니다. (`git commit -m 'feat: 설명'`)
4. 브랜치에 Push 합니다. (`git push origin feat/기능명`)
5. Pull Request를 열어주세요.

---

## 📄 라이선스

[MIT License](LICENSE) © 2026 Neotis
