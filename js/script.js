/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

// Global Variables
const listItems = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10;

// showPage function: Shows 10 students per page
function showPage (list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex){
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}

// appendPageLinks function: Appends students and links to the page
const appendPageLinks = (list) => {
   const totalPages = Math.ceil (listItems.length / itemsPerPage);
   const page = document.getElementsByClassName('page')[0];
   const div = document.createElement('div');
   const ul = document.createElement('ul');
   const li = document.createElement('li');
   div.className = 'pagination';
   page.appendChild(div); 
   div.appendChild(ul);
   for (let i = 0; i < totalPages; i++) {
      ul.appendChild(li);
      const a = document.createElement('a');
      li.appendChild(a);
      a.textContent = `${i + 1}`;
      a.addEventListener ('click', (e) => { // When links are clicked, the corresponding page of 10 students will show.
         const buttons = document.querySelectorAll('.pagination a');
         showPage(listItems, i + 1)
         for (let j = 0; j < buttons.length; j++) { // Allow only the clicked link to have the active class.
            buttons[j].classList.remove('active');
         }
         e.target.classList.add('active');
      });
   }
}
showPage(listItems, 1)
appendPageLinks(listItems);



