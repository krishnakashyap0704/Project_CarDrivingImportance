import { Cards } from "./Cards";
import { DrivingSafetyTips } from "./DrivingSafetyTips";
import { DrivingSchoolCourses } from "./DrivingSchoolCourses";
import { MyCarousel } from "./MyCarousel";
import { TrafficSigns } from "./TrafficSigns";
import './style.css'

export function Dashboard(){
    return(
        <>
        <MyCarousel></MyCarousel><br/>
        <DrivingSchoolCourses></DrivingSchoolCourses><br/>
        <Cards></Cards><br/>
        <DrivingSafetyTips></DrivingSafetyTips><br/>
        <TrafficSigns></TrafficSigns><br/>
        </>
    );
}