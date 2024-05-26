const url = "https://vvri.pythonanywhere.com/api/courses";
const url2 = "https://vvri.pythonanywhere.com/api/students";

async function fetchCourses() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        showCourses(data);
    } catch (error) {
        console.log("Hiba a kurzusok lekérésében: " + error);
    }
}

async function fetchStudents() {
    try {
        const response = await fetch(url2);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Hiba a diákok lekérésében: " + error);
    }
}

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
                <label>Adja meg diák nevét:</label>
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

async function createCourse() {
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

    await createOrUpdateCourse(courseName);
    attachCreateStudentListeners();
}

async function createOrUpdateCourse(courseName, courseId = null) {
    const url = "https://vvri.pythonanywhere.com/api/courses" + (courseId ? `/${courseId}` : "");
    const method = courseId ? 'PUT' : 'POST';
    const data = {
        name: courseName,
    };
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Hálózati hiba.');
        }
        console.log('A kurzus létrehozása és frissítése sikeres volt.');
    } catch (error) {
        console.error('A kurzus létrehozása és frissítése sikertelen volt.', error);
    }
}

async function createStudent(event) {
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

    await addStudent(courseId, studentName);
}

async function addStudent(courseId, studentName) {
    const url = "https://vvri.pythonanywhere.com/api/students";
    const data = {
        name: studentName,
        course_id: courseId
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Hiba diák hozzáadásánál.');
        }
        console.log('Diák sikeres hozzáadása.');
    } catch (error) {
        console.error('Diák sikertelen hozzáadása:', error);
    }
}

async function deleteStudent(courseId, studentName) {
    const url = `https://vvri.pythonanywhere.com/api/students/${courseId}/${studentName}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Sikertelen diák törlés.');
        }
        console.log('Diák törlése sikeres.');
    } catch (error) {
        console.error('Hiba a diák törlése közben:', error);
    }
}

fetchCourses();
fetchStudents();
