# 제목 없음

# 원티드 프리온보딩 1주차

<img src="[https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)"/> <img src="[https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white)"/>
<img src="[https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)"/>
<img src="[https://img.shields.io/badge/-Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white](https://img.shields.io/badge/-Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white)"/>
<img src="[https://img.shields.io/badge/-Emotion-DB7093?style=flat-square&logo=emotion&logoColor=white](https://img.shields.io/badge/-Emotion-DB7093?style=flat-square&logo=emotion&logoColor=white)"/>
<img src="[https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white)"/> <img src="[https://img.shields.io/badge/React](https://img.shields.io/badge/React) Router-CA4245?style=flat-square&logo=React Router&logoColor=white">
<img src="[https://img.shields.io/badge/-Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white](https://img.shields.io/badge/-Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)"/>
<img src="[https://img.shields.io/badge/-React_Query-ff2660?style=flat-square&logo=react&logoColor=white](https://img.shields.io/badge/-React_Query-ff2660?style=flat-square&logo=react&logoColor=white)"/>

</br>

> 요구사항
> 
1. 유저가 페이지를 처음 열었을 때 “/main”에 도착하도록 만들어주세요
- main에는 여행 상품 정보 (mock JSON) 를 활용하여 여행 상품 정보를 노출해야합니다.
- 리스트에서 노출해야 하는 정보: idx, name, mainImage, price, spaceCategory`
- 예약 버튼을 달아 예약 버튼을 클릭시 여행 상품 장바구니에서 사용 할 수 있도록 상품 데이터를 저장해주세요.
- 여행 상품 정보를 클릭했을 때 여행 상품을 자세히 볼 수 있는 모달창을 제작해주세요
- 모달에서 노출해야 하는 정보: `idx`, `name`, `mainImage`, `description`, `spaceCategory`, `price`, `maximumPurchases`, `registrationDate`
1. 여행 상품 리스트의 가격(price), 공간(spaceCategory) 필터 기능을 만들어주세요.
    - [예시) 0~1000, 1500~3000](notion://www.notion.so/%EA%B0%80%EA%B2%A9)
    - [예시) 서울, 부산] (공간)
    - 개별 필터링과, 다중 필터링이 모두 가능하도록 구현해주세요
2. 여행 상품 장바구니 (/reservations)를 만들어주세요.
    - 저장한 여행 상품의 리스트를 보여주고 삭제가 가능할 수 있도록 구성해주세요.
    - 여행 상품의 구매 수량을 변경 가능할 수 있도록 해주세요.
    - 장바구니에 있는 여행 상품의 총 결제액 수를 계산하여 표시해주세요

<br/>

## 🌟 최종 결과

## 프로젝트 실행 방법

---

react app

```
npm i
npm run dev
```

## **작업 방식 안내**

1. 각 요구사항마다 이슈를 생성합니다.
2. 요구사항에 해당하는 작업이 완료되면, 해당 이슈에 대한 커밋을 작성합니다.
3. 작성한 코드에 대해 리뷰를 진행합니다.
4. 각 요구사항에 대해 Best Practice를 선정하고, 개선사항을 토론합니다.
5. 개선사항에 맞게 코드를 수정합니다.
6. 모든 작업이 완료되면 최종 결과물을 도출합니다.

<br/>

## 개선사항

1. 데이터 로딩 시 skeleton ui 사용
- 로딩 중일 때 사용자에게 시각적인 피드백을 제공하기 위해 skeleton ui를 사용. 사용자는 페이지가 로드되는 동안 콘텐츠의 완전한 형태를 볼 수 없지만, skeleton ui는 로딩 중인 콘텐츠를 시각적으로 표시해 사용자에게 로딩 중임을 알리는 역할을 한다.
1. 장바구니 새로고침 시 데이터 유지
- 사용자가 장바구니를 새로고침하면 장바구니의 내용이 사라지는 것을 방지하기 위해**`sessionStorageMiddleware`**라는 미들웨어를 추가.이 미들웨어는 Redux Store가 dispatch되기 전에 실행되며, 상태를 sessionStorage에 저장한다. 이를 통해 사용자가 새로고침하거나 브라우저를 닫았을 때 상태가 유지되도록 한다.
1. ChakraUi의 Toast alert 사용
- 사용자의 행동에 대한 결과를 시각적으로 전달함으로써 사용자 경험을 개선시킬 수 있다.
1. 메인 페이지에서 상품이 장바구니에 담기면 예약버튼 비활성화
- 장바구니에 상품을 추가할 때, 예약 버튼이 비활성화되면 사용자가 장바구니에 무엇이 들어있는지 쉽게 파악할 수 있고, 장바구니와 관련된 작업을 진행할 때 사용자의 실수를 방지할 수 있다.
1. ChakraUi의 <NumberInput/> 사용해서 장바구니 수량 변경
- 수량 버튼에 아무것도 입력하지 않으면, 해당 값이 **`undefined`**로 전달되어 `NaN`이 발생. 잘못된 값이 들어왔을 경우 1로 처리
1. 장바구니 수량 및 총 금액 계산 방식
    
    장바구니에 담긴 상품의 수량을 효율적으로 관리하기 위해 redux state를 사용. 
    
    총 금액은 예약 상품 변경시마다 reduce()로 계산
    
2. 장바구니 개별 상품의 수량에 따른 가격 변동도 확인할 수 있도록 유틸 함수 구현
- 장바구니에 담긴 상품의 수량이 변경될 때마다, 해당 상품의 가격도 변동. 이를 효율적으로 처리하기 위해 유틸 함수를 구현
1. 배포는  public에 json파일을 두고 fetch  `baseURL: '/mock/mock_data.json` 을 통해 데이터 조회
2. 미들웨어
- 수량버튼 예외처리
- 헤더 백드롭필터

## convention

### **git Flow**

- branch : 기능별 작업
- main(master) : 최종 배포
<img src="[https://user-images.githubusercontent.com/80516736/221170041-8b7d3762-1152-4407-a600-d9fe1e87e08d.png](https://user-images.githubusercontent.com/80516736/221170041-8b7d3762-1152-4407-a600-d9fe1e87e08d.png)">

### **Commit Message Pre-fix**

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 내부 문서 추가/수정
- style: 코드 스타일 수정
- refactor: 코드 리팩토링
- test: 테스트 추가/수정
- chore: 빌드 관련 코드 수정

## 회고 및 회의록

[회고](https://www.notion.so/1-070861fff8d444b1ae9639b392c16314)[7팀 과제 수행 회의록](https://www.notion.so/cfbf7c8530ab43f29695dcac5923fd1c)[git wiki](https://github.com/wanted-pre-7/wanted-pre-onboarding-frontend/wiki)

## 팀원

<table>
<tbody>
<tr>
<td align="center"><a href="[https://github.com/yujiseok](https://github.com/yujiseok)"><img src="[https://avatars.githubusercontent.com/u/83855636?v=4](https://avatars.githubusercontent.com/u/83855636?v=4)" width="100px;" alt=""/><br /><sub><b>유지석(팀장)</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/kimhw7](https://github.com/kimhw7)"><img src="[https://avatars.githubusercontent.com/u/100066239?v=4](https://avatars.githubusercontent.com/u/100066239?v=4)" width="100px;" alt=""/><br /><sub><b>김현우</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/Everylisy](https://github.com/Everylisy)"><img src="[https://avatars.githubusercontent.com/u/60170829?v=4](https://avatars.githubusercontent.com/u/60170829?v=4)" width="100px;" alt=""/><br /><sub><b>이영우</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/hansejun](https://github.com/hansejun)"><img src="[https://avatars.githubusercontent.com/u/86880916?v=4](https://avatars.githubusercontent.com/u/86880916?v=4)" width="100px;" alt=""/><br /><sub><b>한세준</b></sub></a><br /></td>
<tr/>
<td align="center"><a href="[https://github.com/cwonho](https://github.com/cwonho)"><img src="[https://avatars.githubusercontent.com/u/104820973?v=4](https://avatars.githubusercontent.com/u/104820973?v=4)" width="100px;" alt=""/><br /><sub><b>정원호</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/sol-pine](https://github.com/sol-pine)"><img src="[https://avatars.githubusercontent.com/u/105091138?v=4](https://avatars.githubusercontent.com/u/105091138?v=4)" width="100px;" alt=""/><br /><sub><b>조해솔</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/ilgon0110](https://github.com/ilgon0110)"><img src="[https://avatars.githubusercontent.com/u/82035356?v=4](https://avatars.githubusercontent.com/u/82035356?v=4)" width="100px;" alt=""/><br /><sub><b>김일곤</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/che-97](https://github.com/che-97)"><img src="[https://avatars.githubusercontent.com/u/80516736?v=4](https://avatars.githubusercontent.com/u/80516736?v=4)" width="100px;" alt=""/><br /><sub><b>최하은</b></sub></a><br /></td>
<tr/>
</tbody>
</table>
