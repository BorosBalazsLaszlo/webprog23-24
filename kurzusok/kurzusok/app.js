const url = "https://vvri.pythonanywhere.com/api/courses";

fetch(url)
    .then(response => response.json())
    .then(data => showCourses(data))
    .catch(error => console.log("Error fetching courses: " + error));

const url2 = "https://vvri.pythonanywhere.com/api/students";

fetch(url2)
    .then(response => response.json())
    .catch(error => console.log("Error fetching students: " + error));

function showCourses(kurzusok) {
    var container = document.getElementById("kurzusok");
    container.innerHTML = '';

    kurzusok.forEach(kurzus => {
        var studentsHTML = kurzus.students.map(student => `
            <li>
                <span>${student.name}</span>
                <button class="delete-student-btn" data-student-id="${student.id}">X</button>
                <br>
            </li>`).join('');

        container.innerHTML += `
            <div class="student-main" data-course-id="${kurzus.id}">
                <p><b>${kurzus.name}</b></p>
                <label>Adja meg diák adwa nevét:</label>
                <input type="text" name="student_name" data-student-name="value">
                <div id="student_list">
                    <ul>${studentsHTML}</ul>
                </div>
                <br>
                <button class="add-student-btn">Diák hozzáadása</button>
                <br>
            </div>`;
    });

    container.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-student-btn')) {
            const studentMain = event.target.closest('.student-main');
            if (studentMain) {
                const courseId = studentMain.dataset.courseId;
                const studentName = event.target.parentElement.querySelector('span').textContent;
                deleteStudent(courseId, studentName);
                event.target.parentElement.remove();
            }
        }
    });

    attachCreateStudentListeners();

    function attachCreateStudentListeners() {
        container.querySelectorAll('.add-student-btn').forEach(button => {
            button.addEventListener('click', createStudent);
        });
    }
}

function createCourse() {
    var container = document.getElementById("kurzusok");
    var courseName = document.getElementById("coursename").value;

    container.innerHTML += `
        <div class="student-main">
            <p>${courseName}</p>
            <label>Adja meg diák nevét:</label>
            <input type="text" name="student_name" data-student-name="value">
            <div id="student_list">
                <ul></ul>
            </div>
            <br>
            <button class="add-student-btn">Diák hozzáadása</button>
            <br>
        </div>`;

        createOrUpdateCourse(courseName);
        attachCreateStudentListeners();
}

function createOrUpdateCourse(courseName, courseId = null) {
    const url = "https://vvri.pythonanywhere.com/api/courses" + (courseId ? `/${courseId}` : "");
    const method = courseId ? 'PUT' : 'POST';
    const data = {
        name: courseName,
    };
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Course created/updated successfully');
    })
    .catch(error => {
        console.error('There was a problem creating/updating the course:', error);
    });
}

function createStudent(event) {
    var container = event.target.closest('.student-main');
    var studentNameInput = container.querySelector('input[name="student_name"]');
    var studentName = studentNameInput.value.trim();

    var studentList = container.querySelector('ul');
    var li = document.createElement('li');
    li.innerHTML = `<span>${studentName}</span> <button class="delete-student-btn">X</button>`;
    studentList.appendChild(li);

    var deleteButton = li.querySelector('.delete-student-btn');
    deleteButton.addEventListener('click', function() {
        li.remove();
        const courseId = container.dataset.courseId;
        deleteStudent(courseId, studentName);
    });

    studentNameInput.value = '';

    const courseId = container.dataset.courseId;

    addStudent(courseId, studentName);
}

function addStudent(courseId, studentName) {
    const url = "https://vvri.pythonanywhere.com/api/students";
    const data = {
        name: studentName,
        course_id: courseId
    };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add student');
        }
        console.log('Student added successfully');
    })
    .catch(error => console.error('Error adding student:', error));
}

function deleteStudent(courseId, studentName) {
    const url = `https://vvri.pythonanywhere.com/api/students/${courseId}/${studentName}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete student');
        }
        console.log('Student deleted successfully');
    })
    .catch(error => console.error('Error deleting student:', error));
}
