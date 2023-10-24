class School {
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(teachObj) {
        this.teachers.push(teachObj);
    }
    constructor(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
}
class student {
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class teachers extends student {
}
let school1 = new School("Alpha");
let school2 = new School("Noby");
let s1 = new student("Fawwad", 45, school1.name);
let s2 = new student("Hira", 35, school2.name);
let s3 = new student("Haram", 16, school2.name);
let t1 = new teachers("Sir Zia", 65, school1.name);
let t2 = new teachers("Ms. Sana Khan", 40, school2.name);
let t3 = new teachers("Sir Imran", 45, school2.name);
school1.addStudent(s1);
school2.addStudent(s2);
school2.addStudent(s3);
school1.addTeacher(t1);
school2.addTeacher(t2);
school2.addTeacher(t3);
console.log(school1);
console.log(school2);
export {};
