# FrontEnd

# BackEnd

Next JS 사용

TYPEORM을 사용하여 객체 - 관계형 데이터베이스를 매핑해서 사용

## 각 모델 내에서 파일들의 역할

### Controller

들어오는 요청을 처리하고 서비스와 상호 작용하며 클라이언트로 다시 보낼 응답을 준비함

### DTO

Swagger에서 테스트를 하기 위해 정의해준 부분

### Entity

도매인 개체 또는 데이터 모델을 나타냄

데이터의 구조와 동작 정의

Next JS 실행시 이 엔티티를 바탕으로 검사 후 테이블 만들어줌

### Module

엔티티, 서비스, 컨트롤러들의 종속성과 상호 작용을 정의하는 부분

### Service

비즈니스 로직을 캡슐화 하고 하나 이상의 엔티티와 관련된 작업 수행

엔티티와 상호작용하고 다양한 작업을 수행하는 메서드를 제공
