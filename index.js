"use strict";
exports.__esModule = true;
var mission = {
    mission_name: 'Starlink-15 (v1.0)',
    launch_date_local: '2020-10-24T11:31:00-04:00',
    launch_site: { site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40' },
    links: {
        article_link: null,
        video_link: "https://youtu.be/J442-ti-Dhg"
    },
    rocket: {
        rocket_name: 'Falcon 9',
        first_stage: {
            cores: [
                {
                    flight: 7,
                    core: {
                        reuse_count: 6,
                        status: 'unknown'
                    }
                }
            ]
        }
    },
    second_stage: {
        payloads: [
            {
                payload_type: 'Satellite',
                payload_mass_kg: 15400,
                payload_mass_lbs: 33951.2
            }
        ]
    }
};
var getKeys = function (mission) {
    return Object.keys(mission);
};
console.log(getKeys(mission));
// ---------------------------------------------------------------------------—————————
// 2) протипизировать функции:
//
// const user = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// }
var User = /** @class */ (function () {
    function User(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return User;
}());
var user = new User('Max', 18, 'male');
var sum = function (a, b) {
    return a + b;
};
var showSum = function (a, b) {
    console.log(a + b);
};
var incAge = function (someUser, inc) {
    someUser.age += inc;
    return someUser;
};
console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 5));
