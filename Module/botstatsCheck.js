function botstatsCheck(replier, scriptName, room) {
  try {
    let botBattery = Device.getBatteryLevel();
    let botTemp = Device.getBatteryTemperature() / 10;
    let botStats = Device.isCharging() ? "충전중" : "충전중 아님";

    if (room == "We_Nyx") {
      replier.reply(
        "✅ [봇 정보🤖] ✅ \n안드로이드 버전코드 : " +
          Device.getAndroidVersionCode() +
          "\n안드로이드 버전명 : Ver " +
          Device.getAndroidVersionName() +
          "\n패키지 이름 : " +
          scriptName +
          "\n휴대폰 브랜드 : " +
          Device.getPhoneBrand().toUpperCase() +
          "\n휴대폰 모델명 : " +
          Device.getPhoneModel().toUpperCase() +
          "\n배터리 충전 상태 : " +
          botStats +
          "\n남은배터리 : " +
          botBattery +
          "%\n온도: " +
          botTemp +
          "℃\n\n✅ [봇 명령어🤖] ✅\n" +
          "0️⃣/봇정보 : 봇의 상태 & 명령어 & 기능보기.\n\n" +
          "1️⃣[가르치기(수동)]\n" +
          "/가르치기 (반응할 말 == 대답) : 특정단어에 반응할 대답 등록.\n" +
          "/db : 해당방에서 배운 단어 목록.\n" +
          "/제시어추가 등록된 제시어(대표1개) == 추가할 제시어 : 반응할 말 추가 등록.\n" +
          "/답장삭제 (반응할 말 == 대답) : 대답에 등록된 단어 삭제.\n" +
          "/삭제 (배운말) : 배운 단어 삭제.\n" +
          "/초기화 : 해당방에서 배운말 전부 초기화."
      );
    } else {
      replier.reply(
        "✅ [봇 정보🤖] ✅ \n안드로이드 버전코드 : " +
          Device.getAndroidVersionCode() +
          "\n안드로이드 버전명 : Ver " +
          Device.getAndroidVersionName() +
          "\n패키지 이름 : " +
          scriptName +
          "\n휴대폰 브랜드 : " +
          Device.getPhoneBrand().toUpperCase() +
          "\n휴대폰 모델명 : " +
          Device.getPhoneModel().toUpperCase() +
          "\n배터리 충전 상태 : " +
          botStats +
          "\n남은배터리 : " +
          botBattery +
          "%\n온도: " +
          botTemp +
          "℃\n\n✅ [봇 명령어🤖] ✅\n" +
          "0️⃣/봇정보 : 봇의 상태 & 명령어 & 기능보기.\n\n" +
          "1️⃣[클래시로얄관련 명령어]\n" +
          "/태그등록 (내태그): 자신의 태그를 등록.\n" +
          "/내정보 : 자신의 클래시로얄 정보.\n" +
          "/상세정보 : 자신의 클래시로얄 상세정보. \n" +
          "/내정보삭제 : DB에 등록된 자신의 정보를 삭제. \n" +
          "/클랜전 : 자신이속한 클랜의 클랜전현황. \n" +
          "/지원률 : 자신이속한 클랜의 지원률 100이하 유저목록.\n" +
          "/점수 : 자신이속한 클랜의 클랜전점수 1500이하 유저목록.\n" +
          "/덱추천 : 상위 50개덱 중 하나 추천.\n" +
          "/상자 : 자신의 상자사이클 불러오기.\n\n" +
          "2️⃣[가르치기(수동)]\n" +
          "/가르치기 (반응할 말 == 대답) : 특정단어에 반응할 대답 등록.\n" +
          "/db : 해당방에서 배운 단어 목록.\n" +
          "/제시어추가 등록된 제시어(대표1개) == 추가할 제시어 : 반응할 말 추가 등록.\n" +
          "/관리자등록 (이름) : 관리자 등록.\n" +
          "/블랙추가 (이름) : 블랙리스트 추가.\n" +
          "/금지어등록 (단어) : 금지단어 추가.\n" +
          "/블랙리스트 : 블랙리스트 목록 조회.\n" +
          "/관리자리스트 : 관리자리스트 목록 조회.\n" +
          "/금지어리스트 : 금지어리스트 목록 조회.\n" +
          "/블랙삭제 (이름) : 블랙리스트 목록에서 제거.\n" +
          "/관리자삭제 (이름) : 관리자리스트 목록에서 제거.\n" +
          "/답장삭제 (반응할 말 == 대답) : 대답에 등록된 단어 삭제.\n" +
          "/삭제 (배운말) : 배운 단어 삭제.\n" +
          "/초기화 : 해당방에서 배운말 전부 초기화.\n\n" +
          "3️⃣[핑퐁봇과의 대화]\n" +
          "/대화시작 (이름) : 봇과 대화할 유저를 입력.\n" +
          "/대화종료 : 봇과 대화종료.\n\n" +
          "4️⃣[기타 사용가능 기능들]\n" +
          "/로또추천 : 랜덤번호 6개 추천.\n" +
          "/코로나 (지역) : 해당지역 코로나 현황 불러오기.\n" +
          "/메뉴추천 : 음식을 랜덤으로 추천.\n" +
          "/날씨 (지역) : 해당지역의 날씨 불러오기.\n" +
          "/부기사진 : 우리집 강아지사진\n" +
          "/검색 (검색할단어) : 위키백과 검색결과.\n"
      );
    }
  } catch (e) {
    replier.reply("⚠️오류가 발생했습니다.\n오류내용 : " + e);
  }
}

module.exports = botstatsCheck;
