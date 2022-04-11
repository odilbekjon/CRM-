let teachersBtn = document.getElementById("teachers-btn")
let studentsBtn = document.getElementById("students-btn")
let groupsBtn = document.getElementById("groups-btn")
let coursesBtn = document.getElementById("courses-btn")

// lists
let teachersList = document.querySelector(".teachers-list")
let studentsList = document.querySelector(".students-list")
let groupsList = document.querySelector(".groups-list")
let coursesList = document.querySelector(".courses-list")

teachersBtn.addEventListener("click", () => {
    teachersList.classList.remove('none')
    studentsList.classList.add("none")
    groupsList.classList.add("none")
    coursesList.classList.add("none")
})

studentsBtn.addEventListener("click", () => {
    teachersList.classList.add("none")
    studentsList.classList.remove("none")
    groupsList.classList.add("none")
    coursesList.classList.add("none")
})


groupsBtn.addEventListener("click", () => {
    teachersList.classList.add("none")
    studentsList.classList.add("none")
    groupsList.classList.remove("none")
    coursesList.classList.add("none")
})

coursesBtn.addEventListener("click", () => {
    teachersList.classList.add("none")
    studentsList.classList.add("none")
    groupsList.classList.add("none")
    coursesList.classList.remove("none")
})


// group add
const courseSelectGr = document.querySelector('.selecter');
const teacherSelectGr = document.querySelector('.select__teacher');


courseSelectGr.addEventListener("change", (e) => {
  let inputValue = e.target.value.trim();
  fetch("/api/v2")
    .then((res) => res.json())
    .then((data) => {
      allTeachers(data);
      function allTeachers(teachers) {
        teacherSelectGr.innerHTML = "";
        const foundTeacher = teachers.filter((e) => e.courseName === inputValue);
        if (foundTeacher) {
          foundTeacher.map((teacher) => {
            console.log(teacher);
            const { username } = teacher;
            let option = document.createElement("option");

            option.value = username;
            option.innerHTML = username;
            return teacherSelectGr.appendChild(option);
          });
        }
      }
    });
});

const selected = document.getElementById('selecterS')

selected.addEventListener('change', (e) => {
    let value2 = e.target.value.trim()
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {
        allGroupName(data)
        function allGroupName(group){
            optionG.innerHTML = "" 
           const filterGroup = group.filter(e => e.courseName == value2)
           console.log(filterGroup);
           if(filterGroup){
               filterGroup.map((item) => {
                   const { groupName } = item
                   let newOption = document.createElement('option')
                   newOption.value = groupName
                   newOption.innerHTML = groupName
                   return optionG.appendChild(newOption)
               })
           }
        }
    });

})
