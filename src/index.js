// import { nanoid } from 'nanoid';
// const id = nanoid(5);
// console.log(id);

// import { customAlphabet } from "nanoid";
// const alphabet = 'abc123';
// const customNanoid = customAlphabet(alphabet, 10);
// const id = customNanoid();
// console.log(id);

// import { success, notice, info, error, defaultModules } from "@pnotify/core/dist/PNotify.js";
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import "@pnotify/core/dist/BrightTheme.css";

// defaultModules.set(PNotifyMobile, {});

// const mySuccess = success({
//     text: 'Операція успішна',
// })
// const myError = notice({
//     text: 'Операція успішна',
// })
// const myInfo = info({
//     text: 'Операція успішна',
// })
// const myNotice = error({
//     text: 'Операція успішна',
// })

// console.log(mySuccess);
// console.log(myError);
// console.log(myInfo);
// console.log(myNotice);

// import {Chart, registerables} from 'chart.js';

// Chart.register(...registerables);

// const date = {
//     labels: ['january', 'february', 'march', 'april', 'may', 'june', 'july'],
//     datasets: [{
//         label: 'Temp',
//         data: [15, 13, 24, 25, 26, 42, 54],
//         fill: false,
//         borderColor: 'rgb(143, 54, 78)',
//         tension: 0.1
//     }],
// }
// const config = {
//     type: 'line',
//     data: date,
//     options: {}
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const a = document.getElementById('myChart').getContext('2d');
//     new Chart(a, config);
// })


// import * as basicLightbox from 'basiclightbox';
// import 'basicLightbox/dist/basicLightbox.min.css';

// const img = '<img src="https://media.4-paws.org/f/8/0/5/f8055215b5cdc5dee5494c255ca891d7b7d33cd1/Molly_006-2829x1886-2726x1886.jpg" alt="car">';
// const instance = basicLightbox.create(img);
// instance.show();

import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        borderWidth: 2,
      },
    ],
  };
  const settings = {
    type: 'line',
    data: chartData,
    options: {}
  }
document.getElementById('reveal').addEventListener('click', () =>{
    const salesChart = document.getElementById('salesСhart');
    new Chart(salesChart, settings);
});