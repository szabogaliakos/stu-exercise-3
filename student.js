function Person(_firstName, _lastName, _gender, _date){
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.gender = _gender;
    this.date = _date;
}
Person.prototype.fullName = function(){
    return firstName + " " + lastName;
};
Person.prototype.personInfo = function(){
    return firstName + " " + lastName + ", " + gender + ", " + date;
};

function Student(_class, _faculty, _major){
    this.class = _class;
    this.faculty = _faculty;
    this.major = _major;
}

