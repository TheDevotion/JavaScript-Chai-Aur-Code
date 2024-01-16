// last video on object:

// VIMP: destructurring
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor;

// more concise way to do it will be:

// const { courseInstructor } = course;

// you can change the name of key also.
const { courseInstructor: instructor } = course;

console.log(instructor);

//000000000000000000000000000000000000000000//

// same concept used in react:
// curly braces are directly used as parameter.
// not .company etc etc.

// const navbar = ({ company }) => {};

// navbar((company = "DipakJJ"));

//------------------------------------------------//

// API:

// object without name is JSON

// apna kaam kisi aur ke sar pe daal dena matlab API.

// e.g menucard is api document of restraunt
// gmail

// values come from bakent and how you write them

// most values now come in JSON.
// it is like an object
// keys are also written in strings unlike object where it is optional

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// THIS IS MY GITHUB API:

/*
{
  "login": "TheDevotion",
  "id": 113444364,
  "node_id": "U_kgDOBsMGDA",
  "avatar_url": "https://avatars.githubusercontent.com/u/113444364?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/TheDevotion",
  "html_url": "https://github.com/TheDevotion",
  "followers_url": "https://api.github.com/users/TheDevotion/followers",
  "following_url": "https://api.github.com/users/TheDevotion/following{/other_user}",
  "gists_url": "https://api.github.com/users/TheDevotion/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/TheDevotion/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/TheDevotion/subscriptions",
  "organizations_url": "https://api.github.com/users/TheDevotion/orgs",
  "repos_url": "https://api.github.com/users/TheDevotion/repos",
  "events_url": "https://api.github.com/users/TheDevotion/events{/privacy}",
  "received_events_url": "https://api.github.com/users/TheDevotion/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dipak Jadhav",
  "company": null,
  "blog": "",
  "location": "Nashik",
  "email": null,
  "hireable": null,
  "bio": "Front end | DSA",
  "twitter_username": "JustDipak",
  "public_repos": 7,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2022-09-13T13:00:26Z",
  "updated_at": "2024-01-13T13:30:31Z"
}

*/

// YOu can convert this json into object and can then use them.
// thats what an api does.

// API can be also in format of array. and then many objects inside it.

/*

[
    {}
    {}
    {}
]

*/

//--------------------------------------------//
// RANDOM USER ME API

/*
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
*/

// use JSON FORMATOR:

// whole industry uses api in JSON format.
