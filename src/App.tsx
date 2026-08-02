import { useState } from "react";
import icon from "./icon.png";
import "./App.css";
import { sites } from "./SitesData";
import "../node_modules/bootstrap/js/dist/dropdown.js";
import { Site, SitesCard } from "./SitesCard";

const App = () => {
  const [siteType, setSiteType] = useState("all");

  const filteredItems: Site[] =
    siteType === "all"
      ? sites
      : sites.filter((site) => site.siteType === siteType);

  const handleTypeFilter = (type: string) => {
    siteType === type ? setSiteType("all") : setSiteType(type);
  };

  return (
    <div className="App">
      <header className="App-header px-5">
        <img src={icon} className="App-logo" alt="logo" />
        <h2 className="pt-2">Kourses++</h2>
        <h5>
          An online learning hub. Lots of online courses and online learning
          websites are gathered in Kourses++
        </h5>
        <h5>
          แหล่งรวมคอร์สและเว็บไซต์สำหรับการเรียนแบบออนไลน์
          เพราะเราเชื่อว่าการเรียนรู้ไม่มีขีดจำกัด
          และสามารถเกิดขึ้นได้ทุกที่ทุกเวลา
        </h5>
      </header>
      <div className="row-cols-auto pt-4 px-5">
        <h5 className="pt-1">Filter by</h5>
        <button
          className={`m-2 btn ${siteType === "general" ? "btn-type-general-active" : "btn-type-general"}`}
          onClick={() => handleTypeFilter("general")}
        >
          General courses
        </button>
        <button
          className={`m-2 btn ${siteType === "programming" ? "btn-type-programming-active" : "btn-type-programming"}`}
          onClick={() => handleTypeFilter("programming")}
        >
          Programming courses
        </button>
        <button
          className={`m-2 btn ${siteType === "thai" ? "btn-type-thai-active" : "btn-type-thai"}`}
          onClick={() => handleTypeFilter("thai")}
        >
          Thai courses
        </button>
      </div>
      <div className="container pb-5">
        <SitesCard sites={filteredItems} />
      </div>
      <div className="App-footer">
        <div>
          Kourses++ is a tribute website dedicated to free online learning
          platforms worldwide. It celebrates the opportunities they provide for
          people to gain knowledge, develop skills, and achieve their dreams. It
          is a space of inspiration and lifelong learning for everyone.
        </div>
        <div>
          Kourses++
          สร้างขึ้นเพื่อเป็นการขอบคุณแก่แพลตฟอร์มเรียนออนไลน์ฟรีทั่วโลกที่เปิดโอกาสให้ผู้คนได้เรียนรู้
          พัฒนาทักษะ และทำตามความฝันจนสำเร็จ
          เป็นพื้นที่รวบรวมแรงบันดาลใจและการเรียนรู้สำหรับทุกคน
        </div>
        <div>
          <a
            href={"https://github.com/endowp/koursesplusplus"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Kourses++ source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
