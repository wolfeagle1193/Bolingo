
import postOne from "./assets/posts/post_one.jpg";
import postTwo from "./assets/posts/post_two.jpg";
import postThree from "./assets/posts/post_three.jpg";
import postFour from "./assets/posts/post_four.jpg";
import postFive from "./assets/posts/post_five.jpg";
import postSix from "./assets/posts/post_six.jpg";
import postSeven from "./assets/posts/post_seven.jpg";

import userOne from "./assets/users/user_one.jpg";
import userTwo from "./assets/users/user_2.jpg";
import userThree from "./assets/users/user_3.jpg";
import userFour from "./assets/users/user_4.jpg";
import userFive from "./assets/users/user_5.jpg";
import userSix from "./assets/users/user_6.jpg";
import userSeven from "./assets/users/user_7.jpg";




export const Users = [
    { id: 1, profilePicture: userOne, username: "Perez Rudy" },
    { id: 2, profilePicture: userTwo, username: "Agatha Christie" },
    { id: 3, profilePicture: userThree, username: "Balthazar Some" },
    { id: 4, profilePicture: userFour, username: "Diagne Bourry" },
    { id: 5, profilePicture: userFive, username: "Pape Samba" },
    { id: 6, profilePicture: userSix, username: "Christiane Iliza" },
    { id: 7, profilePicture: userSeven, username: "Aleandra Cistie" }
];

export const Posts = [
    { id: 1, desc: "I am my own Boss", photo: postOne, date: "il y'a 5 mins", userId: 1, like: 32, comment: 12 },
    { id: 2, photo: postTwo, date: "il y'a 31mins", userId: 2, like: 32, comment: 98 },
    { id: 3, desc: "Ora et Labora", photo: postThree, date: "il y'a 45mins ", userId: 3, like: 32, comment: 1234 },
    { id: 4, desc: "Never doubt the King", photo: postFour, date: "il y'a 3 heures", userId: 4, like: 32, comment: 0 },
    { id: 5, desc: "Bad days build better days", photo: postFive, date: "il y'a 15 heures", userId: 5, like: 32, comment: 19 },
    { id: 6, desc: "Persistence is the Key", photo: postSix, date: "il y'a 11 mins", userId: 6, like: 320, comment: 9 },
    { id: 7, desc: "Bad days build better days.", photo: postSeven, date: "il y'a 1 min", userId: 7, like: 3, comment: 17 }
];