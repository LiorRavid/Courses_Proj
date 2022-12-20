import {makeId} from "./util.service";
import {loadFromStorage,saveToStorage} from "./storage.service";

const STORAGE_KEY = 'Students_DB';
const gCourses = [
    {
        id:makeId(),
        name:"Math-101",
        startingDate: new Date("2022-10-01"),
        endingDate: new Date("2023-01-06"),
        days:[{day:"Sunday",startTime:"10:00",endTime:"12:00"}],
        proffesor:{},
        students: [{}]
    }
]

_createCourses();

function _createCourses() {
    let courses = loadFromStorage(STORAGE_KEY);
    if (!courses || !courses.length) {
        courses = gCourses;
    }
    saveToStorage(courses);
}