function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

function createDays () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.getElementById('days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const days = dezDaysList[index];
        const daysInWeek = document.createElement('li');
        daysInWeek.innerHTML = days;
        daysInWeek.className = 'day';
        if (days === 24 || days === 25 || days ===  31) {
            daysInWeek.className = 'day holiday';
        } else if (days === 4 || days === 11 || days === 18 || days === 25) {
            daysInWeek.className = 'day friday'
        }
        if (days === 25) {
            daysInWeek.className = 'day holiday friday'
        }
        
        

        daysList.appendChild(daysInWeek);
    }

}

createDays();

function createHolidayBtn() {
    const holidayBtn = document.createElement('button');
    const holidayDiv = document.querySelector('.buttons-container');

    holidayBtn.id = 'btn-holiday';
    holidayBtn.innerText = 'Feriados';
    holidayDiv.appendChild(holidayBtn);
}

createHolidayBtn();

function changeHolidayColor() {
    const holiday = document.querySelectorAll('.holiday');

    if (holiday[0].style.backgroundColor == 'rgb(210, 210, 210)') {
        for (let index = 0; index < holiday.length; index += 1) {
            holiday[index].style.backgroundColor = 'rgb(238, 238, 238)';
        } 
    } else {
        for (let index = 0; index < holiday.length; index += 1) {
            holiday[index].style.backgroundColor = 'rgb(210, 210, 210)';
        }
    }
  
}

const holidayBtn = document.getElementById('btn-holiday');
holidayBtn.addEventListener('click', changeHolidayColor);

function createFridayBtn() {
    const fridayBtn = document.createElement('button');
    const fridayDiv= document.querySelector('.buttons-container');

    fridayBtn.id = 'btn-friday';
    fridayBtn.innerText = 'Sexta-feira';
    fridayDiv.appendChild(fridayBtn);
}

createFridayBtn();

const fridayBtn = document.getElementById('btn-friday');
fridayBtn.addEventListener('click', changeFridayColor);

function changeFridayColor() {
    const friday = document.querySelectorAll('.friday');
    const fridayStorage = [4, 11, 18, 25];

    if (friday[3].innerText == 'SEXTOU o/') {
        for (let index = 0; index < friday.length; index += 1) {
            friday[index].innerText = fridayStorage[index];
        }
    } else {
        for (let index = 0; index < friday.length; index += 1) {
            friday[index].innerText = 'SEXTOU o/';
        }
    }
}

const day = document.querySelectorAll('.day');
for (let li of day) {
    li.addEventListener('mouseover', changeZoom);
    li.addEventListener('mouseleave', changeZoomDefault);
}

function changeZoom(event) {
    event.target.style.fontSize = '25px';
}

function changeZoomDefault() {
    event.target.style.fontSize = '20px';
}

function createTask(task) {
    const span = document.createElement('span');
    const spanDiv = document.querySelector('.my-tasks');

    span.innerHTML = task;
    spanDiv.appendChild(span);
}

createTask('Codar');
