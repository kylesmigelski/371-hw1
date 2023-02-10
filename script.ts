console.log("Hello World")

type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
}

// Initialize an array of courses
let courses: Course[] = [
    {courseNumber: "CS 162", courseName: "Intro to Computer Science", semesterTaken: "Fall 2020"},
    {courseNumber: "CS 163", courseName: "Into to Computer Science II", semesterTaken: "Winter 2021"},
    {courseNumber: "CS 350", courseName: "Software Development", semesterTaken: "Fall 2022"},
    {courseNumber: "CS 353", courseName: "Database", semesterTaken: "Fall 2022"}]

// Build the table programmatically
const tArea4 = document.getElementById("area4-table")
// Add more code here to build the table programmatically:
let table = `<table>
    <tr>
        <th>Course Number</th>
        <th>Course Name</th>
        <th>Semester Taken</th>
    </tr>`

for (const course of courses) {
    table += `<tr>
        <td>${course.courseNumber}</td>
        <td>${course.courseName}</td>
        <td>${course.semesterTaken}</td>
    </tr>`;
}

table += `</table>`
tArea4.innerHTML = table

type Company = {
    name: string,
    abbreviation: string,
    url: string
}

// Initialize an array of companies
let companies: Company[] = [
    {name: "Yanfeng", abbreviation: "YF", url: "https://www.yanfeng.com/"},
    {name: "Open Systems Technologies", abbreviation: "OST", url: "https://www.ostusa.com/"},
    {name: "Steelcase", abbreviation: "SCS", url: "https://www.steelcase.com/"}]

// Build the list programmatically
const tArea5 = document.getElementById("area6-list")
// Add more code here to build the list programmatically:
let list = `<h4>Local Company Links</h4><ul>`
for (const company of companies) {
    list += `<li><a class="bullet" href="${company.url}">${company.abbreviation}</a></li>`
}
list += `</ul>`
tArea5.innerHTML = list

type SocialMedia = {
    icon: string;   // this can be a name of a local image or a URL to a remote image
    url: string;    // URL of the said social media company
}

// Initialize an array of social media
let socialMedia: SocialMedia[] = [
    {icon:"/github-mark.svg", url: "https://www.github.com/kylesmigelski"},
    {icon:"/linkedin-svgrepo-com.svg", url: "https://www.linkedin.com/in/kylesmigelski"},
    {icon:"/Google_Photos_icon_(2020).svg", url: "https://photos.app.goo.gl/b1qXwLsajX6cUfDh9"},
    {icon:"/Instagram_logo_2016.svg", url: "https://www.instagram.com/kylesmigelski/"},
    {icon:"/stackoverflow-icon.svg", url: "https://stackoverflow.com/"},
]

const tArea8 = document.getElementById("area8-social")
// Add more code here to build the icons programmatically:
let icons = ``;
for (const media of socialMedia) {
    icons += `<a target="_blank" href="${media.url}" rel="noopener noreferrer"><img src="${media.icon}" height="70"></a>`
}
tArea8.innerHTML = icons
