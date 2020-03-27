class Person{
    constructor(firstName, lastName, gender, date) {
        this.name = {
            first : firstName,
            last : lastName
        }
        this.gender = gender;
        this.date = date;
    }
    fullName() {
        return this.name.first + " " + this.name.last;
    }
    personInfo() {
        return this.name.first + " " + this.name.last + "," + this.gender + "," + this.date.toLocaleString('en-GB');
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
        return sum / this.classes.length;
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

    let newStudent = new Student(first, last, gender, date, [], faculty, major);
    addStudentToDom(newStudent);
    students.push(newStudent);
}

function buildStudentCard(student){
    // Create resources
    let container = document.getElementById("student-container");
    let column = document.createElement("div");
    let card = document.createElement("div");
    let cardBody = document.createElement("div");
    let titleName = document.createElement("h5");
    let buttonDetails = document.createElement("button");

    // Set style
    let columnClasses = ["col-sm-12", "col-md-6", "col-lg-6"];
    for (let i = 0; i < columnClasses.length; i++) {
        column.classList.add(columnClasses[i]);
    }
    card.classList.add("card");
    card.classList.add("m-3");
    card.style.width = "18rem";
    cardBody.classList.add("card-body");
    titleName.classList.add("card-title");
    let buttonClasses = ["btn", "btn-primary"];
    for (let i = 0; i < buttonClasses.length; i++) {
        buttonDetails.classList.add(buttonClasses[i]);
    }

    // Set content
    titleName.innerText = student.fullName();
    buttonDetails.innerText = "See more";

    // Build DOM
    cardBody.appendChild(titleName);
    cardBody.appendChild(buttonDetails);
    card.appendChild(cardBody);
    column.appendChild(card);
    container.appendChild(column);
}

function buildStudentModal(student){

}

function addStudentToDom(student) {
    buildStudentCard(student);
    buildStudentModal(student);
}

let firstStudent = new Student(
    "Jack",
    "Kenway",
    "Male",
    new Date(1978,7,26),
    [
        {
            name: "Android",
            score: 0
        },
        {
            name: "Organizational Behavior",
            score: 0
        },
        {
            name: "Cross Cultural Management",
            score: 0
        }
    ],
    "Information Technology",
    "Computer Science");

firstStudent.setFirstSubjectScore(9);
firstStudent.setSecondSubjectScore(6);
firstStudent.setThirdSubjectScore(8);





