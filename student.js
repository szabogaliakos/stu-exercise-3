class Person{
    constructor(firstName, lastName, gender, date) {
        this.name = {
            first : firstName,
            last : lastName
        };
        this.gender = gender;
        this.date = date;
    }
    fullName() {
        return this.name.first + " " + this.name.last;
    }
    personInfo() {
        return this.name.first + " " + this.name.last + "," + this.gender + "," + this.date.toLocaleString('en-GB').split(',')[0];
    }
}

class Student extends Person{
    constructor(firstName, lastName, gender, date, classes, faculty, major) {
        super(firstName, lastName, gender, date);
        this.classes = classes;
        this.faculty = faculty;
        this.major = major;
    }
    get getAverageScore() {
        let sum = 0;
        for (let i = 0; i < this.classes.length; i++) {
            sum += this.classes[i].score;
        }
        return (sum / this.classes.length).toFixed(2);
    }
    setFirstSubjectScore(score1) {
        this.classes[0].score = score1;
        return this.classes[0].score;
    }
    setSecondSubjectScore(score2) {
        this.classes[1].score = score2;
        return this.classes[1].score;
    }
    setThirdSubjectScore(score3) {
        this.classes[2].score = score3;
        return this.classes[2].score;
    }
    static classify(score) {
        if (score >= 9)
            return "Excellent";
        else if (score >= 8)
            return "Good";
        else if (score >= 7)
            return "Average";
        else if (score >= 5)
            return "Below Average";
        else
            return "Weak";
    }
    scoreInfo() {
        this.classes.forEach(x => console.log(x.name + ": " + x.score + "\n"));
    }
    studentInfo() {
        return "Avg score: " + this.getAverageScore.toFixed(2) + "\n" +
            "Classification: " + Student.classify(this.getAverageScore);
    }
}

let students = [];
let numberOfStudents = 0;

function createStudent() {
    let first = document.getElementById("inputFirstName").value;
    let last = document.getElementById("inputLastName").value;
    let gender = "";
    let female = document.getElementById("radioGenderFemale");
    let male = document.getElementById("radioGenderMale");
    if (female.checked)
    {
        gender = female.value;
    }
    else{
        gender = male.value;
    }

    let date = new Date(document.getElementById("inputDate").value);

    let faculty = document.getElementById("inputFaculty").value;
    let major = document.getElementById("inputMajor").value;

    let inputClasses = document.getElementsByClassName("inputClass");
    let classes = [];
    for (let i = 0; i < inputClasses.length; i++) {
        classes.push(
            {
                name : inputClasses[i].value,
                score : 0
            });
    }


    let newStudent = new Student(first, last, gender, date, classes, faculty, major);
    addStudentToDom(newStudent);
    students.push(newStudent);
}

function buildStudentCard(student){
    let container = document.getElementById("student-container");
    let studentCard = document.createElement("div");
    studentCard.innerHTML = "<div class=\"col-sm-12 col-md-6 col-lg-6\">\n" +
        "                    <div class=\"card m-3\" style=\"width: 18rem;\">\n" +
        "                        <div class=\"card-body\">\n" +
        "                            <h5 class=\"card-title pb-4\"></h5>\n" +
        "                            <div class=\"row\">\n" +
        "                                <div class=\"col-6\">\n" +
        "                                    <p>Gender:</p>\n" +
        "                                </div>\n" +
        "                                <div class=\"col-6\">\n" +
        "                                    <p class=\"font-weight-light gender\"></p>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"row\">\n" +
        "                                <div class=\"col-6\">\n" +
        "                                    <p>DOB:</p>\n" +
        "                                </div>\n" +
        "                                <div class=\"col-6\">\n" +
        "                                    <p class=\"font-weight-light dob\"></p>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"row\">\n" +
        "                                <div class=\"col-6\">\n" +
        "                                    <p>Faculty:</p>\n" +
        "                                </div>\n" +
        "                                <div class=\"col-6\">\n" +
        "                                    <p class=\"font-weight-light faculty\"></p>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"row pb-4\">\n" +
        "                                <div class=\"col-6\">\n" +
        "                                    <p>Major:</p>\n" +
        "                                </div>\n" +
        "                                <div class=\"col-6\">\n" +
        "                                    <p class=\"font-weight-light major\"></p>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <table class=\"table\">\n" +
        "                                <thead>\n" +
        "                                <tr>\n" +
        "                                    <th scope=\"col\">Class name</th>\n" +
        "                                    <th scope=\"col\">Score</th>\n" +
        "                                </tr>\n" +
        "                                </thead>\n" +
        "                                <tbody>\n" +
        "                                <tr>\n" +
        "                                    <td class=\"class-name\"></td>\n" +
        "                                    <td>" +
        "                                       <input type=\"number\" class=\"score-input\">" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr>\n" +
        "                                    <td class=\"class-name\"></td>\n" +
        "                                    <td>" +
        "                                       <input type=\"number\" class=\"score-input\">" +
        "                                    </td>\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr>\n" +
        "                                    <td class=\"class-name\"></td>\n" +
        "                                    <td>" +
        "                                       <input type=\"number\" class=\"score-input\">" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                </tbody>\n" +
        "                            </table>\n" +
        "                            <div class=\"row\">\n" +
        "                                <div class=\"col-4\">\n" +
        "                                    <p>Avg:</p>\n" +
        "                                </div>\n" +
        "                                <div class=\"col-4\">\n" +
        "                                    <p class=\"font-weight-light average\"></p>\n" +
        "                                </div>\n" +
        "                                <div class=\"col-4\">\n" +
        "                                    <p class='classify'></p>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"card-footer d-flex justify-content-center\">\n" +
        "                            <button id=" + numberOfStudents + " type=\"button\" class=\"btn btn-primary\" onclick=\"saveChanges(this)\">Save</button>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>";

        // Set content
        studentCard.getElementsByClassName("card-title")[0].innerText = student.fullName();
        studentCard.getElementsByClassName("gender")[0].innerText = student.gender;
        studentCard.getElementsByClassName("dob")[0].innerText = student.date.toLocaleString('en-GB').split(',')[0];
        studentCard.getElementsByClassName("faculty")[0].innerText = student.faculty;
        studentCard.getElementsByClassName("major")[0].innerText = student.major;
        for (let i = 0; i < student.classes.length; i++) {
            studentCard.getElementsByClassName("class-name")[i].innerText = student.classes[i].name;
            studentCard.getElementsByClassName("score-input")[i].value = student.classes[i].score;
        }
        studentCard.getElementsByClassName("average")[0].innerText = student.getAverageScore;

        studentCard.id = "student-" + numberOfStudents++;
        container.appendChild(studentCard);
}

function addStudentToDom(student) {
    buildStudentCard(student);
}

function saveChanges(button){
    console.log(button.id);
    let id = button.id;
    let studentCard = document.getElementById("student-" + button.id);
    students[id].setFirstSubjectScore(parseInt(studentCard.getElementsByClassName("score-input")[0].value));
    students[id].setSecondSubjectScore(parseInt(studentCard.getElementsByClassName("score-input")[1].value));
    students[id].setThirdSubjectScore(parseInt(studentCard.getElementsByClassName("score-input")[2].value));
    studentCard.getElementsByClassName("average")[0].innerText = students[id].getAverageScore;
    studentCard.getElementsByClassName("classify")[0].innerText = Student.classify(students[id].getAverageScore);
}


