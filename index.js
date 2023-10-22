console.log("Welcome");

const data = [
    {
        name: "Rajat Rawal",
        age: 17,
        city: "Kolhapur",
        langvage: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/med/men/69.jpg",
    },
    {
        name: "Bhumi Rawal",
        age: 13,
        city: "Kolhapur",
        langvage: "C",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/med/women/75.jpg",
    },
    {
        name: "Karan Rawal",
        age: 17,
        city: "Kolhapur",
        langvage: "C++",
        framework: "Boot",
        image: "https://randomuser.me/api/portraits/med/men/74.jpg",
    },
]
function cvIterator(profile) {
    nextIndex = 0;
    return {
        next: function () {
            if (nextIndex <=profile.length) {
                if (nextIndex==profile.length){
                    nextIndex=0;
                }
                return {value: profile[nextIndex++], done: false}
            }
            else {
                return {done: true}
            }
        }
    }
}

let candidates = cvIterator(data)
function nextFunc() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    image.innerHTML = `<img src="${currentCandidate.image}">`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">City: ${currentCandidate.city}</li>
    <li class="list-group-item">Langvage: ${currentCandidate.langvage}</li>
    <li class="list-group-item">Framework: ${currentCandidate.framework}</li>
  </ul>`;
}
let nextBtn = document.getElementById("next");
nextFunc();
nextBtn.addEventListener("click", nextFunc)
