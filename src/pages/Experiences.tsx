import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Footer from "../components/Footer";
import { Event } from "../Types";

const eventLists: Event[] = [
    {
        id: 0,
        date: "APRIL 2018 -",
        title: "京都大学",
        describe: "工学部 電気電子工学科"
    },
    {
        id: 1,
        date: "SEPTEMBER 2019",
        title: "エレクトロニクスサマーキャンプ 優秀賞",
        describe: "電気電子工学科主催"
    },
    {
        id: 2,
        date: "APRIL 2020 - MARCH 2021",
        title: "Webエンジニア(アルバイト)",
        describe: "心理学実験のWebアプリ開発"
    },
    {
        id: 3,
        date: "AUGUST 2020 -",
        title: "ソフトウェアエンジニア(アルバイト)",
        describe: "C#でWindowsデスクトップアプリ開発など"
    },
    {
        id: 4,
        date: "FEBRUARY 2021 - MATCH 2021",
        title: "Fixstars インターン",
        describe: "物体検出モデルNanoDetの調査"
    },
];

const Experiences: React.FC = () => (
    <div>
        <div>
            <p>Experiences</p>
        </div>
        <VerticalTimeline className="timeline">
            {eventLists.map((value) => {
                return (
                    <VerticalTimelineElement
                        key={value.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{background: "#fff", color: "#3a3a3f"}}
                        contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                        date={value.date}
                        iconStyle={{background: "#3a3a3f", color: "3a3a3f"}}
                    >
                        <h3 className="vertical-timeline-element-title">{value.title}</h3>
                        <p>{value.describe}</p>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
        <Footer />
    </div>
);

export default Experiences;