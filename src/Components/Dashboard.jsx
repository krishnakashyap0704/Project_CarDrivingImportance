import { Cards } from "./Cards";
import { DrivingSafetyTips } from "./DrivingSafetyTips";
import { DrivingSchoolCourses } from "./DrivingSchoolCourses";
import { MyCarousel } from "./MyCarousel";
import { TrafficSigns } from "./TrafficSigns";
import './style.css'

export function Dashboard(){
    return(
        <>
        <MyCarousel></MyCarousel>
        <DrivingSchoolCourses></DrivingSchoolCourses>
        <Cards></Cards>
        <DrivingSafetyTips></DrivingSafetyTips>
        <TrafficSigns></TrafficSigns>
        </>
    );
}