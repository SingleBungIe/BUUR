import React from "react";
import { useHistory } from "react-router";
import MyPageBackHeader from "../../components/MyPage/MyPageBackHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Notice = () => {
  const history = useHistory();

  function moveNoticeDetail() {
    history.push({
      pathname: "/mypage/notice/detail",
    });
  }

  return (
    <div className="notice-page">
      <MyPageBackHeader pageInfo="공지사항" />
      <div className="notice-body">
        <div className="notice-item">
          <div className="notice-item-div" onClick={() => moveNoticeDetail()}>
            <span className="notice-item-title">
              {" "}
              BUUR 추천 서비스 일시 중단 안내
            </span>
            <span className="notice-item-day">2022.04.05</span>
          </div>
          <ArrowForwardIosIcon
            className="notice-arrow-icon"
            sx={{ fontSize: 16, color: "#D8D8D8" }}
            onClick={() => moveNoticeDetail()}
          />
        </div>
        <div className="notice-item">
          <div className="notice-item-div" onClick={() => moveNoticeDetail()}>
            <span className="notice-item-title"> 찜한 맥주 기능 추가 안내</span>
            <span className="notice-item-day">2022.04.01</span>
          </div>
          <ArrowForwardIosIcon
            className="notice-arrow-icon"
            sx={{ fontSize: 16, color: "#D8D8D8" }}
            onClick={() => moveNoticeDetail()}
          />
        </div>
        <div className="notice-item">
          <div className="notice-item-div" onClick={() => moveNoticeDetail()}>
            <span className="notice-item-title">
              {" "}
              냉장고 서비스 기능 추가 안내
            </span>
            <span className="notice-item-day">2022.03.28</span>
          </div>
          <ArrowForwardIosIcon
            className="notice-arrow-icon"
            sx={{ fontSize: 16, color: "#D8D8D8" }}
            onClick={() => moveNoticeDetail()}
          />
        </div>
        <div className="notice-item">
          <div className="notice-item-div" onClick={() => moveNoticeDetail()}>
            <span className="notice-item-title"> 추천 기능 추가 안내</span>
            <span className="notice-item-day">2022.03.28</span>
          </div>
          <ArrowForwardIosIcon
            className="notice-arrow-icon"
            sx={{ fontSize: 16, color: "#D8D8D8" }}
            onClick={() => moveNoticeDetail()}
          />
        </div>
        <div className="notice-item">
          <div className="notice-item-div" onClick={() => moveNoticeDetail()}>
            <span className="notice-item-title"> 맥주 종류 추가 안내</span>
            <span className="notice-item-day">2022.03.01</span>
          </div>
          <ArrowForwardIosIcon
            className="notice-arrow-icon"
            sx={{ fontSize: 16, color: "#D8D8D8" }}
            onClick={() => moveNoticeDetail()}
          />
        </div>
      </div>
    </div>
  );
};

export default Notice;
