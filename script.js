//1
let student1Courses = ['Math', 'English', "Geography", "Programming"];
let student2Courses = ['Geography', 'Spanish', 'Programming', "Phisic"];

const findCommonCourses = () => {
    for (const course of student2Courses) {
        if (student1Courses.includes(course)) {
            console.log("Birinchi" + " " + course)
        }

    }
}

findCommonCourses()

//2
let food1 = ['Noodle', 'Pasta', 'Ice-cream'];
let food2 = ['Fries', 'Ice-cream', 'Pizza'];

const findFood = () => {
    for (const food of food2) {
        if (food1.includes(food)) {
            console.log("Ikkinchi" + " " + food)
        }

    }
}

findFood()

//3
let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

const findValues = () => {
    for (const values of values3) {
        if (values1.includes(values)) {
            console.log("Uchinchi1" + " " +  values)
        }

    }
    for (const valuesTwo of values2) {
        if (values1.includes(valuesTwo)) {
            console.log("Uchinchi2" + " " + valuesTwo)
        }

    }
}

findValues()

//4

function four() {
    let furniture = ['Table', 'Chairs', 'Couch'];
    let newFurniture = []
    for (let i = 0; i < furniture.length; i++) {
        newFurniture.push(furniture[i].split(""))
    }

    console.log("To'rtinchi" + " " + newFurniture.join(","));
}

four()

//5

const hasOddNumber = (array) => array.some((elem) => elem % 2 === 1)

const resultHasOddNum = hasOddNumber([1, 2,2,2,2,2,4]);

console.log("Beshinchi" + " " + resultHasOddNum)

//6

const hasZero = (array) => array.some((elem) => elem = "0")

const resultHasZero = hasZero([3, 3, 3, 2, 1, 2, 3, 2, 1, 3, 1, "0", 1, 2]);

console.log("Oltinchi" + " " + resultHasZero)

//7

const hasOnlyOddNumber = (array) => array.some((elem) => elem % 2 === 1)

const resultHasOddOnlyNum = hasOnlyOddNumber([1, 3, 5, 7, 9, 11]);

console.log("Yettinchi" + " " + resultHasOddOnlyNum)

//8
