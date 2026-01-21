# 🖼️ React Image Gallery
> Pixabay API를 활용한 고화질 이미지 검색 및 반응형 갤러리 서비스

## 🎥 서비스 데모 / 스크린샷
![Demo](https://via.placeholder.com/800x450?text=Service+Demo+Image)

## 📌 프로젝트 소개
- **프로젝트 목적:** 외부 API(Pixabay) 연동을 통한 비동기 데이터 처리 학습 및 Tailwind CSS를 활용한 모던하고 반응형인 UI 구현 역량 강화
- **개발 기간:** 2025.01.15 ~ 2025.01.21 (1명)
- **나의 역할:** 프론트엔드 개발 (100%)

## 🛠 기술 스택
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Flowbite](https://img.shields.io/badge/Flowbite-7E3AF2?style=for-the-badge&logo=flowbite&logoColor=white)

## ✨ 핵심 기능
- **이미지 검색:** Pixabay API를 연동하여 키워드 기반의 실시간 이미지 검색 기능 제공
- **반응형 갤러리:** Tailwind CSS의 Grid 시스템을 활용하여 모바일(1열), 태블릿(2열), 데스크탑(3열) 환경에 최적화된 레이아웃 제공
- **데이터 시각화:** 각 이미지의 조회수, 다운로드 수, 좋아요 및 태그를 카드 형태로 가독성 있게 표시
- **환경 변수 관리:** `.env` 파일을 활용하여 API Key 등 민감한 정보를 안전하게 관리

## 💡 기술적 도전 및 해결 (Troubleshooting)
### 1. API 요청 최적화 및 검색 성능 개선
- **상황:** 사용자가 입력창에 타이핑을 할 때마다 API가 호출되어 불필요한 네트워크 트래픽이 발생하고 API 호출 할당량이 낭비될 우려가 있었음.
- **해결:** `App.jsx`의 `term` 상태를 `ImageSearch` 컴포넌트 내부의 로컬 `text` 상태와 분리함. 폼의 `onSubmit` 이벤트가 발생했을 때만 상위 컴포넌트의 `term` 상태를 업데이트하도록 구현함.
- **결과:** 사용자가 검색 버튼을 누르거나 Enter를 쳤을 때만 API 요청이 수행되도록 변경하여 네트워크 비용을 절감하고 안정적인 로직 구축.

### 2. 컴포넌트 기반 아키텍처 및 재사용성
- **상황:** 이미지 목록 표시 부분과 검색 부분이 섞여 있어 코드의 가독성이 떨어짐.
- **해결:** 검색 바(`ImageSearch`)와 이미지 카드(`ImageCard`)를 별도의 독립적인 컴포넌트로 분리하고 Props를 전달받아 렌더링하도록 구조화함.
- **결과:** 각 기능의 책임이 분리되어 유지보수가 용이해지고 확장성 있는 코드 베이스 확보.

## 🏗 아키텍처
```text
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── ImageCard.jsx    # 개별 이미지 정보 카드
│   └── ImageSearch.jsx  # 검색 입력창 및 필터
├── App.jsx              # 전체 상태 관리 및 API 연동
├── main.jsx             # 진입점
└── index.css            # 글로벌 스타일 및 Tailwind 설정
```

## 🔗 링크
- [GitHub Repository](https://github.com/jbkim08/image-gallery)
- [배포 사이트](URL_HERE)
