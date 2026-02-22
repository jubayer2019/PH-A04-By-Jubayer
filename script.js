// Dynamic Count Array
let InterviewList = [];
let RejectedList = [];

// Veriables for count elements
let TotalCount = document.getElementById('TotalCount');
let InterviewCount = document.getElementById('InterviewCount');
let RejectedCount = document.getElementById('RejectedCount');

// Buttons
let AllFilterBtn = document.getElementById('all-filter-btn');
let InterviewFilterBtn = document.getElementById('interview-filter-btn');
let RejectedFilterBtn = document.getElementById('rejected-filter-btn');

const jobCards= document.getElementById('jobCards');

// Deligating event listener to jobCards container
const jobCardsContainer = document.querySelector('#jobCards');
console.log(jobCardsContainer);

// Function to calculate count and update the UI
function calculateCount(){
    TotalCount.innerText = jobCards.children.length;
    InterviewCount.innerText = InterviewList.length;
    RejectedCount.innerText = RejectedList.length;
}
calculateCount();

function toggleStyle(id){
    // Removing active styles from all buttons
    AllFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    InterviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    RejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    // Adding default styles to all buttons
    AllFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
    InterviewFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
    RejectedFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');

    // Adding active styles to the selected button
    const selected = document.getElementById(id);
    selected.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
}

jobCardsContainer.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;
})