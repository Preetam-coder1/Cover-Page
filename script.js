// ========================================
// IIUC EEE COVER PAGE GENERATOR
// Complete JavaScript
// ========================================


// ========================================
// HELPER
// ========================================

const $ = id => document.getElementById(id);


// ========================================
// CURRENT DOCUMENT TYPE
// ========================================

let currentType = "assignment";


// ========================================
// LAB INDEX ROWS
// ========================================

let rows = [
    { no: "01", name: "", date: "" },
    { no: "02", name: "", date: "" },
    { no: "03", name: "", date: "" },
    { no: "04", name: "", date: "" },
    { no: "05", name: "", date: "" },
    { no: "06", name: "", date: "" },
    { no: "07", name: "", date: "" },
    { no: "08", name: "", date: "" },
    { no: "09", name: "", date: "" },
    { no: "10", name: "", date: "" }
];


// ========================================
// IIUC EEE COURSE LIST
// AUTUMN 2026
// ========================================

const eeeCourses = [

    // =========================================
    // 1ST SEMESTER
    // =========================================

    {
        id: "EEE-1101",
        semester: "1st Semester",
        department: "EEE",
        code: "EEE-1101",
        title: "Electrical Circuits I"
    },

    {
        id: "EEE-1102",
        semester: "1st Semester",
        department: "EEE",
        code: "EEE-1102",
        title: "Electrical Circuits I Sessional"
    },

    {
        id: "CSE-1105",
        semester: "1st Semester",
        department: "CSE",
        code: "CSE-1105",
        title: "Computer Programming I"
    },

    {
        id: "CSE-1106",
        semester: "1st Semester",
        department: "CSE",
        code: "CSE-1106",
        title: "Computer Programming I Sessional"
    },

    {
        id: "MATH-1107",
        semester: "1st Semester",
        department: "Mathematics",
        code: "MATH-1107",
        title: "Mathematics-I (Differential & Integral Calculus)"
    },

    {
        id: "PHY-1101",
        semester: "1st Semester",
        department: "Physics",
        code: "PHY-1101",
        title: "Physics I"
    },

    {
        id: "GEEL-1106",
        semester: "1st Semester",
        department: "English",
        code: "GEEL-1106",
        title: "Advanced English"
    },

    {
        id: "UREM-1101",
        semester: "1st Semester",
        department: "General Education",
        code: "UREM-1101",
        title: "Text of Ethics and Morality"
    },


    // =========================================
    // 2ND SEMESTER
    // =========================================

    {
        id: "EEE-1201",
        semester: "2nd Semester",
        department: "EEE",
        code: "EEE-1201",
        title: "Electrical Circuits II"
    },

    {
        id: "EEE-1202",
        semester: "2nd Semester",
        department: "EEE",
        code: "EEE-1202",
        title: "Electrical Circuits II Sessional & Electrical Workshop"
    },

    {
        id: "CSE-1205",
        semester: "2nd Semester",
        department: "CSE",
        code: "CSE-1205",
        title: "Computer Programming II"
    },

    {
        id: "CSE-1206",
        semester: "2nd Semester",
        department: "CSE",
        code: "CSE-1206",
        title: "Computer Programming II Sessional"
    },

    {
        id: "PHY-1201",
        semester: "2nd Semester",
        department: "Physics",
        code: "PHY-1201",
        title: "Physics II"
    },

    {
        id: "PHY-1204",
        semester: "2nd Semester",
        department: "Physics",
        code: "PHY-1204",
        title: "Physics Sessional"
    },

    {
        id: "MATH-1207",
        semester: "2nd Semester",
        department: "Mathematics",
        code: "MATH-1207",
        title: "Mathematics-II (Differential Equation and Coordinate Geometry)"
    },

    {
        id: "CE-1204",
        semester: "2nd Semester",
        department: "Civil Engineering",
        code: "CE-1204",
        title: "Engineering Drawing Sessional"
    },

    {
        id: "GEED-1201",
        semester: "2nd Semester",
        department: "General Education",
        code: "GEED-1201",
        title: "Basic Principles of Islam"
    },


    // =========================================
    // 3RD SEMESTER
    // =========================================

    {
        id: "EEE-2301",
        semester: "3rd Semester",
        department: "EEE",
        code: "EEE-2301",
        title: "Electronics I"
    },

    {
        id: "EEE-2302",
        semester: "3rd Semester",
        department: "EEE",
        code: "EEE-2302",
        title: "Electronics I Sessional"
    },

    {
        id: "EEE-2303",
        semester: "3rd Semester",
        department: "EEE",
        code: "EEE-2303",
        title: "Electrical Machine I"
    },

    {
        id: "EEE-2306",
        semester: "3rd Semester",
        department: "EEE",
        code: "EEE-2306",
        title: "Numerical Technique Sessional"
    },

    {
        id: "MATH-2309",
        semester: "3rd Semester",
        department: "Mathematics",
        code: "MATH-2309",
        title: "Mathematics III (Linear Algebra, Matrices and Vector Analysis)"
    },

    {
        id: "STAT-2303",
        semester: "3rd Semester",
        department: "Statistics",
        code: "STAT-2303",
        title: "Probability & Statistics"
    },

    {
        id: "ME-2301",
        semester: "3rd Semester",
        department: "Mechanical Engineering",
        code: "ME-2301",
        title: "Fundamentals of Mechanical Engineering"
    },

    {
        id: "CHEM-2301",
        semester: "3rd Semester",
        department: "Chemistry",
        code: "CHEM-2301",
        title: "Chemistry"
    },

    {
        id: "CHEM-2304",
        semester: "3rd Semester",
        department: "Chemistry",
        code: "CHEM-2304",
        title: "Chemistry Sessional"
    },

    {
        id: "GEED-2302",
        semester: "3rd Semester",
        department: "General Education",
        code: "GEED-2302",
        title: "Sciences of"
    },


    // =========================================
    // 4TH SEMESTER
    // =========================================

    {
        id: "EEE-2401",
        semester: "4th Semester",
        department: "EEE",
        code: "EEE-2401",
        title: "Electrical Machine II"
    },

    {
        id: "EEE-2402",
        semester: "4th Semester",
        department: "EEE",
        code: "EEE-2402",
        title: "Electrical Machine II Sessional"
    },

    {
        id: "EEE-2407",
        semester: "4th Semester",
        department: "EEE",
        code: "EEE-2407",
        title: "Digital Electronics"
    },

    {
        id: "EEE-2408",
        semester: "4th Semester",
        department: "EEE",
        code: "EEE-2408",
        title: "Digital Electronics Sessional"
    },

    {
        id: "EEE-2411",
        semester: "4th Semester",
        department: "EEE",
        code: "EEE-2411",
        title: "Electronics II"
    },

    {
        id: "EEE-2412",
        semester: "4th Semester",
        department: "EEE",
        code: "EEE-2412",
        title: "Electronics II Sessional and Electronics Workshop"
    },

    {
        id: "EEE-2415",
        semester: "4th Semester",
        department: "EEE",
        code: "EEE-2415",
        title: "Transmission & Distribution of Electrical Power"
    },

    {
        id: "MATH-2409",
        semester: "4th Semester",
        department: "Mathematics",
        code: "MATH-2409",
        title: "Mathematics IV (Complex Variable, Laplaces and Fourier Analysis, Z-transform)"
    },

    {
        id: "ACC-2401",
        semester: "4th Semester",
        department: "Accounting",
        code: "ACC-2401",
        title: "Financial and Managerial Accounting"
    },

    {
        id: "GEBL-2401",
        semester: "4th Semester",
        department: "Bangla",
        code: "GEBL-2401",
        title: "Bangla Language and Literature"
    },


    // =========================================
    // 5TH SEMESTER
    // =========================================

    {
        id: "EEE-3501",
        semester: "5th Semester",
        department: "EEE",
        code: "EEE-3501",
        title: "Continuous Signals and Linear Systems"
    },

    {
        id: "EEE-3505",
        semester: "5th Semester",
        department: "EEE",
        code: "EEE-3505",
        title: "Microprocessor and Interfacing"
    },

    {
        id: "EEE-3506",
        semester: "5th Semester",
        department: "EEE",
        code: "EEE-3506",
        title: "Microprocessor & Interfacing Sessional"
    },

    {
        id: "EEE-3508",
        semester: "5th Semester",
        department: "EEE",
        code: "EEE-3508",
        title: "Circuit Simulation Sessional"
    },

    {
        id: "EEE-3515",
        semester: "5th Semester",
        department: "EEE",
        code: "EEE-3515",
        title: "Electrical Properties of Materials"
    },

    {
        id: "EEE-3519",
        semester: "5th Semester",
        department: "EEE",
        code: "EEE-3519",
        title: "Power System Analysis"
    },

    {
        id: "EEE-3520",
        semester: "5th Semester",
        department: "EEE",
        code: "EEE-3520",
        title: "Power System Analysis Sessional"
    },

    {
        id: "ECON-3501",
        semester: "5th Semester",
        department: "Economics",
        code: "ECON-3501",
        title: "Principles of Economics"
    },

    {
        id: "GEED-3503",
        semester: "5th Semester",
        department: "General Education",
        code: "GEED-3503",
        title: "Political Thoughts and Social Behavior"
    },


    // =========================================
    // 6TH SEMESTER
    // =========================================

    {
        id: "EEE-3601",
        semester: "6th Semester",
        department: "EEE",
        code: "EEE-3601",
        title: "Communication Theory"
    },

    {
        id: "EEE-3602",
        semester: "6th Semester",
        department: "EEE",
        code: "EEE-3602",
        title: "Communication Theory Sessional"
    },

    {
        id: "EEE-3603",
        semester: "6th Semester",
        department: "EEE",
        code: "EEE-3603",
        title: "Digital Signal Processing I"
    },

    {
        id: "EEE-3604",
        semester: "6th Semester",
        department: "EEE",
        code: "EEE-3604",
        title: "Digital Signal Processing I Sessional"
    },

    {
        id: "EEE-3607",
        semester: "6th Semester",
        department: "EEE",
        code: "EEE-3607",
        title: "Solid State Devices"
    },

    {
        id: "EEE-3608",
        semester: "6th Semester",
        department: "EEE",
        code: "EEE-3608",
        title: "Research Methodology and Seminar"
    },

    {
        id: "EEE-3612",
        semester: "6th Semester",
        department: "EEE",
        code: "EEE-3612",
        title: "Electrical Service Design Sessional"
    },

    {
        id: "EEE-3621",
        semester: "6th Semester",
        department: "EEE",
        code: "EEE-3621",
        title: "Engineering Electromagnetism"
    },

    {
        id: "MGT-3601",
        semester: "6th Semester",
        department: "Management",
        code: "MGT-3601",
        title: "Industrial Management"
    },

    {
        id: "GEED-3604",
        semester: "6th Semester",
        department: "General Education",
        code: "GEED-3604",
        title: "Life and Teachings of the Prophet Muhammad (saas)"
    },

    {
        id: "GEHE-3601",
        semester: "6th Semester",
        department: "History",
        code: "GEHE-3601",
        title: "History of the Emergence of Bangladesh"
    },


    // =========================================
    // 7TH SEMESTER
    // =========================================

    {
        id: "EEE-4860-1",
        semester: "7th Semester",
        department: "EEE",
        code: "EEE-4860",
        title: "Project/Thesis [1 Year Duration]"
    },

    {
        id: "EEE-4701",
        semester: "7th Semester",
        department: "EEE",
        code: "EEE-4701",
        title: "Control System I"
    },

    {
        id: "EEE-4702",
        semester: "7th Semester",
        department: "EEE",
        code: "EEE-4702",
        title: "Control System I Sessional"
    },

    {
        id: "EEE-47xx-Major-I",
        semester: "7th Semester",
        department: "EEE",
        code: "EEE-47xx",
        title: "Major-I"
    },

    {
        id: "EEE-47xx-Major-I-Sessional",
        semester: "7th Semester",
        department: "EEE",
        code: "EEE-47xx",
        title: "Major-I Sessional"
    },

    {
        id: "EEE-47xx-Major-II",
        semester: "7th Semester",
        department: "EEE",
        code: "EEE-47xx",
        title: "Major-II"
    },

    {
        id: "EEE-47xx-Minor-I",
        semester: "7th Semester",
        department: "EEE",
        code: "EEE-47xx",
        title: "Minor-I"
    },

    {
        id: "EEE-47xx-Minor-I-Sessional",
        semester: "7th Semester",
        department: "EEE",
        code: "EEE-47xx",
        title: "Minor-I Sessional"
    },

    {
        id: "GEIH-4701",
        semester: "7th Semester",
        department: "General Education",
        code: "GEIH-4701",
        title: "A Survey of Islamic History and Culture"
    },

    {
        id: "LAW-4725",
        semester: "7th Semester",
        department: "Law",
        code: "LAW-4725",
        title: "Professional Ethics and Environmental Protection Law"
    },


    // =========================================
    // 8TH SEMESTER
    // =========================================

    {
        id: "EEE-4860-2",
        semester: "8th Semester",
        department: "EEE",
        code: "EEE-4860",
        title: "Project/Thesis [Continuation]"
    },

    {
        id: "EEE-4804",
        semester: "8th Semester",
        department: "EEE",
        code: "EEE-4804",
        title: "Industrial Attachment"
    },

    {
        id: "EEE-48xx-Major-III",
        semester: "8th Semester",
        department: "EEE",
        code: "EEE-48xx",
        title: "Major-III"
    },

    {
        id: "EEE-48xx-Major-III-Sessional",
        semester: "8th Semester",
        department: "EEE",
        code: "EEE-48xx",
        title: "Major-III Sessional"
    },

    {
        id: "EEE-48xx-Major-IV",
        semester: "8th Semester",
        department: "EEE",
        code: "EEE-48xx",
        title: "Major-IV"
    },

    {
        id: "EEE-48xx-Interdisciplinary-I",
        semester: "8th Semester",
        department: "EEE",
        code: "EEE-48xx",
        title: "Interdisciplinary-I"
    },

    {
        id: "EEE-48xx-Interdisciplinary-I-Sessional",
        semester: "8th Semester",
        department: "EEE",
        code: "EEE-48xx",
        title: "Interdisciplinary-I Sessional"
    },

    {
        id: "EEE-48xx-Interdisciplinary-II",
        semester: "8th Semester",
        department: "EEE",
        code: "EEE-48xx",
        title: "Interdisciplinary-II"
    },

    {
        id: "EEE-48xx-Interdisciplinary-II-Sessional",
        semester: "8th Semester",
        department: "EEE",
        code: "EEE-48xx",
        title: "Interdisciplinary-II Sessional"
    },

    {
        id: "EEE-4822",
        semester: "8th Semester",
        department: "EEE",
        code: "EEE-4822",
        title: "General viva-voce"
    }

];
const eeeTeachers = [
    {
        name: "Engr. Sk. Md. Golam Mostafa",
        designation: "Associate Professor "
    },
    {
        name: "Dr. Sikder Sunbeam Islam",
        designation: "Professor"
    },
    {
        name: "Dr. Mohammad Shamimul Haque Choudhury",
        designation: "Professor"
    },
    {
        name: "Mr. Muhammad Athar Uddin",
        designation: "Professor"
    },
    {
        name: "Dr. Yasir Arafat",
        designation: "Associate Professor"
    },
    {
        name: "Mr. Sayed Allamah Iqbal",
        designation: "Associate Professor"
    },
    {
        name: "Dr. Md. Ismail Haque",
        designation: "Associate Professor"
    },
    {
        name: "Engr. Mohammed Abdul Kader",
        designation: "Associate Professor"
    },
    {
        name: "Engr. Md. Eftekhar Alam",
        designation: "Associate Professor"
    },
    {
        name: "Mr. Md. Rasheduzzaman",
        designation: "Associate Professor"
    },
    {
        name: "Dr. Md. Zahid Hasan",
        designation: "Associate Professor"
    },
    {
        name: "Engr. Md. Shahid Ullah",
        designation: "Assistant Professor"
    },
    {
        name: "Engr. Khandakar Abdulla Al Mamun",
        designation: "Assistant Professor"
    },
    {
        name: "Mr. Md. Jashim Uddin",
        designation: "Assistant Professor"
    },
    {
        name: "Engr. Shafait Ahmed",
        designation: "Assistant Professor"
    },
    {
        name: "Engr. Md. Jalal Uddin",
        designation: "Assistant Professor"
    },
    {
        name: "Engr. Md. Nazmus Sakib",
        designation: "Assistant Professor"
    },
    {
        name: "Dr. Abu Huraira Muhammad Idban",
        designation: "Assistant Professor"
    },
    {
        name: "Engr. Md. Lokman Hossain",
        designation: "Lecturer"
    },
    {
        name: "Mr. Muhammad Raihan",
        designation: "Lecturer"
    },
    {
        name: "Ms Tanzim Mushtary",
        designation: "Lecturer"
    },
    {
        name: "Engr. Riazul Islam",
        designation: "Lecturer"
    },
    {
        name: "Mr. Md. Sazidul Haque",
        designation: "Lecturer"
    },
    {
        name: "Engr. Fazle Rabbi",
        designation: "Lecturer"
    },
    {
        name: "Kaniz Fatema",
        designation: "Lecturer"
    },
    {
        name: "Ms. Jannatul Ferdous",
        designation: "Lecturer"
    },
    {
        name: "Nowshin Lubaba",
        designation: "Lecturer"
    },
    {
        name: "Mr. Sake Millat Imami",
        designation: "Lecturer"
    },
    {
        name: "Engr. Jabir Ahsan",
        designation: "Lecturer"
    },
    {
        name: "Engr. Meraz Ahmed Ohi",
        designation: "Lecturer"
    },
    {
        name: "Engr. Mahee Rashid Chowdhury",
        designation: "Lecturer"
    },
    {
        name: "Engr. Md. Mehedi Hassan Joy",
        designation: "Lecturer"
    },
    {
        name: "Ms. Zerin Yeasmin",
        designation: "Lecturer"
    }
];


// ========================================
// GET INPUT VALUE
// ========================================

function val(id, fallback = "") {

    const x = $(id);

    if (x && x.value.trim()) {
        return x.value.trim();
    }

    return fallback;
}


// ========================================
// SET TEXT
// ========================================

function setText(id, text) {

    const element = $(id);

    if (element) {
        element.textContent = text;
    }
}


// ========================================
// POPULATE COURSE DROPDOWN
// ========================================

function populateCourseList() {

    const select = $("courseSelect");

    if (!select) return;

    select.innerHTML = `
        <option value="">
            -- Select Course --
        </option>
    `;

    let currentSemester = "";

    eeeCourses.forEach(course => {

        if (course.semester !== currentSemester) {

            currentSemester = course.semester;

            const group = document.createElement("optgroup");

            group.label = currentSemester;

            select.appendChild(group);
        }

        const group = Array.from(
            select.querySelectorAll("optgroup")
        ).find(
            g => g.label === course.semester
        );

        const option = document.createElement("option");

        option.value = course.id;

        option.textContent =
            `${course.code} — ${course.title} [${course.department}]`;

        option.dataset.code = course.code;
        option.dataset.title = course.title;
        option.dataset.department = course.department;

        group.appendChild(option);

    });
}
function populateTeacherList() {

    const select = $("teacherSelect");

    if (!select) return;

    select.innerHTML = `
        <option value="">
            -- Select EEE Teacher --
        </option>
    `;

    eeeTeachers.forEach((teacher, index) => {

        const option = document.createElement("option");

        option.value = index;

        option.textContent =
            `${teacher.name} — ${teacher.designation}`;

        option.dataset.name = teacher.name;
        option.dataset.designation = teacher.designation;

        select.appendChild(option);
    });
}

// ========================================
// COURSE SELECTION
// ========================================

function handleCourseSelection() {

    const select = $("courseSelect");

    if (!select) return;


    const selectedCourse = eeeCourses.find(
        course => course.id === select.value
    );


    // If no course selected
    if (!selectedCourse) {

        $("courseCode").value = "";

        $("courseTitle").value = "";

        $("courseDepartment").value =
            "Department of Electrical and Electronic Engineering (EEE)";

        updatePreview();

        return;
    }


    // Automatically fill course details
    $("courseCode").value =
        selectedCourse.code;

    $("courseTitle").value =
        selectedCourse.title;

    $("courseDepartment").value =
        "Department of Electrical and Electronic Engineering (EEE)";


    updatePreview();
}


// ========================================
// DOCUMENT TYPE SELECTION
// ========================================

function selectType(type) {

    currentType = type;


    // Active card
    document
        .querySelectorAll(".type-card")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.type === type
            );

        });


    // Form visibility
    $("labOnly").classList.toggle(
        "hidden",
        type !== "lab"
    );

    $("groupForm").classList.toggle(
        "hidden",
        type !== "group"
    );

    $("indexForm").classList.toggle(
        "hidden",
        type !== "index"
    );


    // Preview visibility
    $("normalPreview").classList.toggle(
        "hidden",
        type === "group" || type === "index"
    );

    $("groupPreview").classList.toggle(
        "hidden",
        type !== "group"
    );

    $("indexPreview").classList.toggle(
        "hidden",
        type !== "index"
    );


    // Titles
    const names = {

        assignment: [
            "Assignment Details",
            "Assignment Cover",
            "ASSIGNMENT"
        ],

        lab: [
            "Lab Report Details",
            "Lab Report Cover",
            "LABORATORY REPORT"
        ],

        index: [
            "Lab Index Details",
            "Lab Index",
            "LABORATORY INDEX"
        ],

        group: [
            "Group Project Details",
            "Group Project Cover",
            "GROUP PROJECT"
        ]

    };


    setText(
        "detailsHeading",
        names[type][0]
    );

    setText(
        "previewLabel",
        names[type][1]
    );

    setText(
        "docTitle",
        names[type][2]
    );


    renderMembers();

    renderIndexRows();

    updatePreview();
}


// ========================================
// GROUP MEMBERS
// ========================================

function renderMembers() {

    const countElement = $("memberCount");

    const box = $("memberInputs");


    if (!countElement || !box) return;


    const count = Number(
        countElement.value
    );


    box.innerHTML = "";


    for (let i = 1; i <= count; i++) {

        const wrap =
            document.createElement("div");


        wrap.innerHTML = `

            <label>
                Member ${i} Name
            </label>

            <input
                class="member-name"
                data-index="${i}"
                placeholder="Member ${i} full name"
            >

            <div class="two-col">

                <div>

                    <label>ID</label>

                    <input
                        class="member-id"
                        data-index="${i}"
                        placeholder="Student ID"
                    >

                </div>


                <div>

                    <label>Section</label>

                    <input
                        class="member-section"
                        data-index="${i}"
                        placeholder="A"
                    >

                </div>

            </div>

        `;


        box.appendChild(wrap);
    }


    // Update preview while typing
    box
        .querySelectorAll("input")
        .forEach(input => {

            input.addEventListener(
                "input",
                updatePreview
            );

        });

}


// ========================================
// LAB INDEX ROWS
// ========================================

function renderIndexRows() {

    const box = $("indexRows");

    if (!box) return;


    box.innerHTML = "";


    rows.forEach((row, index) => {

        const div =
            document.createElement("div");


        div.className = "index-row";


        div.innerHTML = `

            <input
                value="${escapeHtml(row.no)}"
                placeholder="No"
            >

            <input
                value="${escapeHtml(row.name)}"
                placeholder="Experiment name"
            >

            <input
                type="date"
                value="${escapeHtml(row.date)}"
            >

            <button
                class="remove-row"
                title="Remove"
                type="button"
            >
                ×
            </button>

        `;


        const inputs =
            div.querySelectorAll("input");


        // Number
        inputs[0].addEventListener(
            "input",
            () => {

                rows[index].no =
                    inputs[0].value;

                updatePreview();

            }
        );


        // Experiment name
        inputs[1].addEventListener(
            "input",
            () => {

                rows[index].name =
                    inputs[1].value;

                updatePreview();

            }
        );


        // Date
        inputs[2].addEventListener(
            "change",
            () => {

                rows[index].date =
                    inputs[2].value;

                updatePreview();

            }
        );


        // Remove row
        div
            .querySelector(".remove-row")
            .addEventListener(
                "click",
                () => {

                    if (rows.length > 1) {

                        rows.splice(index, 1);

                        renderIndexRows();

                        updatePreview();

                    }

                }
            );


        box.appendChild(div);

    });

}


// ========================================
// ESCAPE HTML
// ========================================

function escapeHtml(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


// ========================================
// DATE FORMAT
// ========================================

function formatDate(value) {

    if (!value) {
        return "________________";
    }


    const date =
        new Date(value + "T00:00:00");


    return date.toLocaleDateString("en-GB");
}


// ========================================
// UPDATE PREVIEW
// ========================================

function updatePreview() {


    // ------------------------------------
    // Normal Assignment / Lab Preview
    // ------------------------------------

    setText(
        "pCourseCode",
        val(
            "courseCode",
            "[COURSE CODE]"
        )
    );


    setText(
        "pCourseTitle",
        val(
            "courseTitle",
            "[COURSE TITLE]"
        )
    );


    setText(
        "pCourseDepartment",
        val(
            "courseDepartment",
            "Department of Electrical and Electronic Engineering (EEE)"
        )
    );


    setText(
        "pTopic",

        currentType === "lab"

            ? val(
                "topic",
                "[EXPERIMENT TITLE]"
            )

            : val(
                "topic",
                "[TOPIC NAME]"
            )
    );


    setText(
        "pTeacher",
        val(
            "teacherName",
            "Teacher Name"
        )
    );


    setText(
        "pDesignation",
        val(
            "designation",
            "Designation"
        )
    );


    setText(
        "pTeacherDept",
        val(
            "teacherDept",
            "Department"
        )
    );


    setText(
        "pStudentName",
        val(
            "studentName",
            "[STUDENT NAME]"
        )
    );


    setText(
        "pStudentId",
        val(
            "studentId",
            "[STUDENT ID]"
        )
    );


    setText(
        "pSemester",
        val(
            "semester",
            "[SEMESTER]"
        )
    );


    setText(
        "pSection",
        val(
            "section",
            "[SECTION]"
        )
    );


    setText(
        "pDepartment",
        val(
            "department",
            "[DEPARTMENT]"
        )
    );


    const submissionDate =
        $("submissionDate");


    setText(
        "pDate",

        submissionDate
            ? formatDate(submissionDate.value)
            : "________________"
    );



    // ------------------------------------
    // Group Project Preview
    // ------------------------------------

    setText(
        "gCourseCode",
        val(
            "courseCode",
            "[COURSE CODE]"
        )
    );


    setText(
        "gCourseTitle",
        val(
            "courseTitle",
            "[COURSE TITLE]"
        )
    );


    setText(
        "gTopic",
        val(
            "topic",
            "[PROJECT TITLE]"
        )
    );


    setText(
        "gTeacher",
        val(
            "teacherName",
            "Teacher Name"
        )
    );


    setText(
        "gDesignation",
        val(
            "designation",
            "Designation"
        )
    );


    setText(
        "gTeacherDept",
        val(
            "teacherDept",
            "Department"
        )
    );


    setText(
        "gDate",

        submissionDate
            ? formatDate(submissionDate.value)
            : "________________"
    );



    // ------------------------------------
    // Lab Index Preview
    // ------------------------------------

    setText(
        "iCourseCode",
        val(
            "courseCode",
            "[COURSE CODE]"
        )
    );


    setText(
        "iCourseTitle",
        val(
            "courseTitle",
            "[COURSE TITLE]"
        )
    );


    setText(
        "iStudent",
        val(
            "studentName",
            "[STUDENT NAME]"
        )
    );


    setText(
        "iStudentId",
        val(
            "studentId",
            "[STUDENT ID]"
        )
    );



    // ------------------------------------
    // Group Members Preview
    // ------------------------------------

    const grid = $("groupGrid");


    if (grid) {

        grid.innerHTML = "";


        document
            .querySelectorAll(".member-name")
            .forEach((nameInput, index) => {


                const idInput =
                    document.querySelector(
                        `.member-id[data-index="${index + 1}"]`
                    );


                const sectionInput =
                    document.querySelector(
                        `.member-section[data-index="${index + 1}"]`
                    );


                const id =
                    idInput?.value.trim()
                    || "[ID]";


                const section =
                    sectionInput?.value.trim()
                    || "[SECTION]";


                const memberName =
                    nameInput.value.trim()
                    || "[MEMBER NAME]";


                const div =
                    document.createElement("div");


                div.className =
                    "member-box";


                div.innerHTML = `

                    <b>
                        ${index + 1}.
                        ${escapeHtml(memberName)}
                    </b>

                    ID:
                    ${escapeHtml(id)}

                    <br>

                    Section:
                    ${escapeHtml(section)}

                `;


                grid.appendChild(div);

            });

    }



    // ------------------------------------
    // Lab Index Table Preview
    // ------------------------------------

    const tbody =
        $("indexPreviewBody");


    if (tbody) {

        tbody.innerHTML = "";


        const minimumRows = 10;

        const count =
            Math.max(
                minimumRows,
                rows.length
            );


        for (
            let i = 0;
            i < count;
            i++
        ) {


            const row =
                rows[i] || {

                    no: String(
                        i + 1
                    ).padStart(2, "0"),

                    name: "",

                    date: ""

                };


            const tr =
                document.createElement("tr");


            tr.innerHTML = `

                <td>
                    ${escapeHtml(
                        row.no ||
                        String(i + 1).padStart(2, "0")
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        row.no
                            ? "Experiment " + row.no
                            : "—"
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        row.name || ""
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        formatDate(row.date)
                    )}
                </td>

                <td></td>

            `;


            tbody.appendChild(tr);

        }

    }

}


// ========================================
// SAVE DRAFT
// ========================================

function saveDraft() {

    const data = {};


    document
        .querySelectorAll("input, select")
        .forEach(element => {

            if (element.id) {

                data[element.id] =
                    element.value;

            }

        });


    data.type =
        currentType;


    data.rows =
        rows;


    localStorage.setItem(
        "iiucCoverDraft",
        JSON.stringify(data)
    );


    const status =
        $("status");


    if (status) {

        status.textContent =
            "Draft saved on this device.";


        setTimeout(() => {

            status.textContent = "";

        }, 2200);

    }

}


// ========================================
// LOAD DRAFT
// ========================================

function loadDraft() {

    try {

        const saved =
            localStorage.getItem(
                "iiucCoverDraft"
            );


        if (!saved) return;


        const data =
            JSON.parse(saved);


        currentType =
            data.type || "assignment";


        if (Array.isArray(data.rows)) {

            rows = data.rows;

        }


        document
            .querySelectorAll("input, select")
            .forEach(element => {

                if (
                    element.id &&
                    data[element.id] !== undefined
                ) {

                    element.value =
                        data[element.id];

                }

            });


        selectType(currentType);


    } catch (error) {

        console.error(
            "Could not load draft:",
            error
        );

    }

}


// ========================================
// RESET EVERYTHING
// ========================================

function resetAll() {

    // Remove saved draft
    localStorage.removeItem(
        "iiucCoverDraft"
    );


    // Clear inputs
    document
        .querySelectorAll("input")
        .forEach(element => {

            element.value = "";

        });


    // Reset course dropdown
    if ($("courseSelect")) {

        $("courseSelect").value = "";

    }


    // Reset course department
    if ($("courseDepartment")) {

        $("courseDepartment").value =
            "Department of Electrical and Electronic Engineering (EEE)";

    }


    // Reset member count
    if ($("memberCount")) {

        $("memberCount").value = "1";

    }


    // Reset lab rows
    rows =
        Array.from(
            { length: 10 },
            (_, index) => ({

                no: String(
                    index + 1
                ).padStart(2, "0"),

                name: "",

                date: ""

            })
        );


    // Reset document type
    selectType("assignment");


    // Status
    const status =
        $("status");


    if (status) {

        status.textContent =
            "Form reset.";


        setTimeout(() => {

            status.textContent = "";

        }, 1800);

    }

}


// ========================================
// EVENT LISTENERS
// ========================================


// Document type cards

document
    .querySelectorAll(".type-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                selectType(
                    button.dataset.type
                );

            }
        );

    });


// Form input changes

document
    .querySelectorAll(
        ".forms input, .forms select"
    )
    .forEach(element => {

        element.addEventListener(
            "input",
            updatePreview
        );

        element.addEventListener(
            "change",
            updatePreview
        );

    });


// Course dropdown

if ($("courseSelect")) {

    $("courseSelect")
        .addEventListener(
            "change",
            handleCourseSelection
        );

}


// Member count

if ($("memberCount")) {

    $("memberCount")
        .addEventListener(
            "change",
            () => {

                renderMembers();

                updatePreview();

            }
        );

}


// Add lab index row

if ($("addRow")) {

    $("addRow")
        .addEventListener(
            "click",
            () => {

                rows.push({

                    no: String(
                        rows.length + 1
                    ).padStart(2, "0"),

                    name: "",

                    date: ""

                });


                renderIndexRows();

                updatePreview();

            }
        );

}


// Save button

if ($("saveBtn")) {

    $("saveBtn")
        .addEventListener(
            "click",
            saveDraft
        );

}


// Reset button

if ($("resetBtn")) {

    $("resetBtn")
        .addEventListener(
            "click",
            resetAll
        );

}


// Print button

if ($("printBtn")) {

    $("printBtn")
        .addEventListener(
            "click",
            () => window.print()
        );

}


// Menu button

if ($("menuBtn")) {

    $("menuBtn")
        .addEventListener(
            "click",
            () => {

                alert(
                    "IIUC Cover Page Generator\n\n" +
                    "Assignment • Lab Report • Lab Index • Group Project"
                );

            }
        );

}
$("teacherSelect").addEventListener("change", function () {

    const selected =
        this.options[this.selectedIndex];

    if (!this.value) {

        $("teacherName").value = "";
        $("designation").value = "";

        updatePreview();
        return;
    }

    $("teacherName").value =
        selected.dataset.name || "";

    $("designation").value =
        selected.dataset.designation || "";

    updatePreview();
});

// ========================================
// INITIALIZE APPLICATION
// ========================================

// VERY IMPORTANT:
// Course list must be created BEFORE
// loading saved draft.

populateCourseList();
populateTeacherList();

loadDraft();
renderMembers();
renderIndexRows();
updatePreview();