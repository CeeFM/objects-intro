const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

wardrobe.material = "absolute junk"

console.log(wardrobe.height, wardrobe.manufacturer, wardrobe.contents, wardrobe.depth, wardrobe.width, wardrobe.material);

console.log(wardrobe);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};

console.log(empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength, empireStateBuilding.height, empireStateBuilding.stories, empireStateBuilding.squareFeet);

console.log(empireStateBuilding["address"], empireStateBuilding["constructionDate"], empireStateBuilding["cost"], empireStateBuilding["owner"], empireStateBuilding["architect"]);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
};

for (let i=0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++) {
    console.log(nashvilleSoftwareSchool.instructors.fullTime[i]);
}

for (let i=0; i < nashvilleSoftwareSchool.instructors.partTime.length; i++) {
    console.log(nashvilleSoftwareSchool.instructors.partTime[i]);
}

let twoNames = nashvilleSoftwareSchool.instructors.fullTime[4] + " " + nashvilleSoftwareSchool.instructors.partTime[0]
console.log(twoNames)
