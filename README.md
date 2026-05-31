# Lucent: Glassmorphism Board Skin for Rhymix

Lucent 레이아웃과 한 쌍을 이루는 깨끗하고 모던한 글래스모피즘 게시판 스킨입니다. Tailwind CSS v4로 빌드했습니다.

- **Lucent 레이아웃 안에서 사용** → 레이아웃의 `--lucent-accent`, `--glass-*`, `--text`(라이트/다크/오토 포함)를 그대로 물려받아 자동으로 톤이 맞습니다.
- **다른 레이아웃에서 단독 사용** → 내장 폴백값으로 동작하며, OS 다크모드(`prefers-color-scheme`)도 따라갑니다.
- 게시판별로 색을 바꾸고 싶으면 스킨 설정의 **강조 색상 덮어쓰기**(HEX)를 입력하면 됩니다.

## 설치 (Install)

1. `lucent` 폴더를 `modules/board/skins/` 아래에 둡니다.
2. 게시판 관리 → 스킨에서 Lucent를 선택합니다.

설치·사용에 Node는 필요 없습니다. 컴파일된 `board.lucent.css`가 동봉됩니다.

## 설정 항목

| 항목 | 설명 |
|---|---|
| 게시판 제목 이미지 / alt | 상단 제목 영역 |
| 강조 색상 덮어쓰기 (HEX) | 비우면 레이아웃 색상 상속 |
| 목록 밀도 | 넉넉하게 / 조밀하게 |

## CSS 수정 / 재빌드

```bash
cd modules/board/skins/lucent
npm install      # 최초 1회
npm run build    # src/input.css -> board.lucent.css
npm run dev      # watch
```

## 호환성 메모

- Tailwind의 Preflight는 제외했습니다. 글 본문/댓글 안의 에디터 HTML에 전역 리셋이 적용되지 않아야 하기 때문입니다.

## 크레딧 & 라이선스

- **크레딧**: 본 스킨의 HTML 템플릿 구조와 기초 설계는 **XE / Rhymix 기본(Default) 게시판 스킨(LGPL v2)**을 기반으로 수정 및 상당한 재작성과 추가 작업을 거쳐 제작되었습니다.
- **라이선스**: **GPL v2** (`LICENSE`).
- **Tailwind CSS**: 컴파일된 CSS에 포함된 Tailwind의 일부 CSS는 MIT 라이선스입니다 (`CREDITS.md` 참고).
