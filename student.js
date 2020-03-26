class Person{
    constructor(_firstName, _lastName, _gender, _date) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.gender = _gender;
        this.date = _date;
    }
    fullName() {
        return firstName + " " + lastName;
    }
    personInfo() {
        return firstName + " " + lastName + ", " + gender + ", " + date;
    }
}

class Student extends Person{
    constructor(_firstName, _lastName, _gender, _date, _class, _faculty, _major) {
        super(_firstName, _lastName, _gender, _date);
        this.class = _class;
        this.faculty = _faculty;
        this.major = _major;
    }
}






