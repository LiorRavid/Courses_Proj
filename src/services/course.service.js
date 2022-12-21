import {utilService} from "./util.service";
import {storageService} from "./storage.service";

const STORAGE_KEY = 'CourseDB';
const gCourses = [
    {
        id:utilService.makeId(),
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
    let courses = storageService.loadFromStorage(STORAGE_KEY);
    if (!courses || !courses.length) {
        courses = gCourses;
    }
    storageService.saveToStorage(STORAGE_KEY,courses);
}