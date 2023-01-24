"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function() {
        const {age} = personalPlanPeter,
              {languages} = personalPlanPeter.skills;

        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += ` ${lang}`.toUpperCase();
        });
           
        console.log(str);
    }
};

function showExperience() {
    const exp = personalPlanPeter.skills.exp;
   console.log(exp);
}

showExperience(personalPlanPeter);

function showProgrammingLangs() {
   for (let key in personalPlanPeter.skills.programmingLangs) {
    console.log(`Язык ${key} изучен на ${personalPlanPeter.skills.programmingLangs[key]} \n`);
   }
};

showProgrammingLangs();

personalPlanPeter.showAgeAndLangs();

//РЕШЕНИЕ УЧИТЕЛЯ

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         console.log(str);
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     console.log(exp);
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//    console.log(str);
// }

// showProgrammingLangs(personalPlanPeter);