// Dynamic Count Array
let InterviewList = [];
let RejectedList = [];
let currentStatus = 'all-filter-btn';

// Variables for count elements
const TotalCount = document.getElementById('TotalCount');
const InterviewCount = document.getElementById('InterviewCount');
const RejectedCount = document.getElementById('RejectedCount');
const AvailableJobsCount = document.getElementById('AvailableJobsCount');
const ofCount = document.getElementById('ofCount');


// Buttons
const AllFilterBtn = document.getElementById('all-filter-btn');
const InterviewFilterBtn = document.getElementById('interview-filter-btn');
const RejectedFilterBtn = document.getElementById('rejected-filter-btn');

// Sections
const jobCards= document.getElementById('jobCards');
const filteredSection = document.getElementById('filteredSection');
const noJobCard = document.getElementById('noJobCard');

// Delegating event listener to jobCards container
const main = document.querySelector('main');
const jobCardsContainer = document.querySelector('#jobCards');
console.log(jobCardsContainer);

// Update Available Jobs Count on page load
function updateJobsCount() {
  if (currentStatus === 'all-filter-btn') {
    AvailableJobsCount.innerText = jobCards.children.length;
  } else if (currentStatus === 'interview-filter-btn') {
    AvailableJobsCount.innerText = InterviewList.length + ' of ' + jobCards.children.length;
  } else if (currentStatus === 'rejected-filter-btn') {
    AvailableJobsCount.innerText = RejectedList.length + ' of ' + jobCards.children.length;
  }
  ofCount.innerText = '';
}


// Function to calculate count and update the UI
function calculateCount(){
    TotalCount.innerText = jobCards.children.length;
    InterviewCount.innerText = InterviewList.length;
    RejectedCount.innerText = RejectedList.length;
    updateJobsCount();
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
    currentStatus = id;


    selected.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');

    // Default Interview and rejected empty state
    jobCards.classList.add('hidden');
    filteredSection.classList.add('hidden');
    noJobCard.classList.add('hidden');

    if(id === 'interview-filter-btn'){
        if(InterviewList.length === 0){
            noJobCard.classList.remove('hidden');
        }else{
            filteredSection.classList.remove('hidden');
            renderInterviewList();
        }
    }else if(id == 'rejected-filter-btn' && RejectedList.length == 0){
        noJobCard.classList.remove('hidden');
        console.log('rejected empty');
    }


    // Button Logic
    
    if(id == 'all-filter-btn'){
        jobCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');
        noJobCard.classList.add('hidden');
        
    }
    else if(id == 'interview-filter-btn'){
        jobCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterviewList();
        ofCount.innerText = InterviewList.length +' of ';
    }
    else if(id == 'rejected-filter-btn'){
        jobCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejectedList();
        ofCount.innerText = RejectedList.length +' of ';
    }

    updateJobsCount()
    


    
}

// Event Listener for Pushing Array List

main.addEventListener('click', function(event){
    if(event.target.classList.contains('interviewBtn')){
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.jobName').innerText;
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        const jobType = parentNode.querySelector('.jobType').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const jobDescription = parentNode.querySelector('.jobDescription').innerText;
        

        parentNode.querySelector('.status').innerText = 'INTERVIEW'
        parentNode.querySelector('.status').className = 'bg-[#10B9811a] text-[#10B981] rounded-sm py-2 px-3 uppercase text-[14px] status';
        

        const cardInfo ={
            jobName,
            jobTitle,
            jobType,
            status: 'INTERVIEW',
            jobDescription
        }

        const jobExist = InterviewList.find(item=> item.jobName == cardInfo.jobName)

        
        
        if(!jobExist){
            InterviewList.push(cardInfo);
        }

        

        RejectedList = RejectedList.filter(item=> item.jobName != cardInfo.jobName)

        
        calculateCount();
        if (currentStatus === 'interview-filter-btn') {
            if (InterviewList.length === 0) {
                filteredSection.classList.add('hidden');
                noJobCard.classList.remove('hidden');
            } else {
                renderInterviewList();
            }
        }

        if (currentStatus === 'rejected-filter-btn') {
            if (RejectedList.length === 0) {
                filteredSection.classList.add('hidden');
                noJobCard.classList.remove('hidden');
            } else {
                renderRejectedList();
            }
        }

        if (currentStatus === 'all-filter-btn' && jobCards.children.length === 0) {
            noJobCard.classList.remove('hidden');
        }

        if(currentStatus === 'rejected-filter-btn'){
            renderRejectedList();
        }
    }
    else if(event.target.classList.contains('rejectedBtn')){
        // console.log(event.target.parentNode.parentNode);
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.jobName').innerText;
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        const jobType = parentNode.querySelector('.jobType').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const jobDescription = parentNode.querySelector('.jobDescription').innerText;
        
        const cardInfo ={
            jobName,
            jobTitle,
            jobType,
            status,
            jobDescription
        }

        const jobExist = RejectedList.find(item=> item.jobName == cardInfo.jobName)

        parentNode.querySelector('.status').innerText = 'REJECTED'
        parentNode.querySelector('.status').className = 'bg-[#EF44441a] text-[#EF4444] rounded-sm py-2 px-3 uppercase text-[14px] status';


        if(!jobExist){
            RejectedList.push(cardInfo);
        }
        InterviewList = InterviewList.filter(item=> item.jobName != cardInfo.jobName)
        
        if(currentStatus === 'interview-filter-btn'){
            renderInterviewList();
        }
        calculateCount();
        if (currentStatus === 'interview-filter-btn') {
            if (InterviewList.length === 0) {
                filteredSection.classList.add('hidden');
                noJobCard.classList.remove('hidden');
            } else {
                renderInterviewList();
            }
        }

        if (currentStatus === 'rejected-filter-btn') {
            if (RejectedList.length === 0) {
                filteredSection.classList.add('hidden');
                noJobCard.classList.remove('hidden');
            } else {
                renderRejectedList();
            }
        }

        if (currentStatus === 'all-filter-btn' && jobCards.children.length === 0) {
            noJobCard.classList.remove('hidden');
        }

    }else if (event.target.closest('.deleteBtn')) {

        const card = event.target.closest('.md\\:flex');

        const jobName = card.querySelector('.jobName').innerText;

        const allCards = jobCards.children;
        for (let i = 0; i < allCards.length; i++) {
            const name = allCards[i].querySelector('.jobName').innerText;
            if (name === jobName) {
                allCards[i].remove();
                break;
            }
        }

        InterviewList = InterviewList.filter(item => item.jobName !== jobName);

        RejectedList = RejectedList.filter(item => item.jobName !== jobName);

        calculateCount();
        if (currentStatus === 'interview-filter-btn') {
            if (InterviewList.length === 0) {
                filteredSection.classList.add('hidden');
                noJobCard.classList.remove('hidden');
            } else {
                renderInterviewList();
            }
        }

        if (currentStatus === 'rejected-filter-btn') {
            if (RejectedList.length === 0) {
                filteredSection.classList.add('hidden');
                noJobCard.classList.remove('hidden');
            } else {
                renderRejectedList();
            }
        }

        if (currentStatus === 'all-filter-btn' && jobCards.children.length === 0) {
            noJobCard.classList.remove('hidden');
        }
    }

})

// Function for Interview List
function renderInterviewList(){
    filteredSection.innerHTML = '';
    for(let interview of InterviewList){

        console.log(interview);

        let div = document.createElement('div');
        div.className=' bg-white rounded-md border-2 border-[#F1F2F4] p-5 my-4 md:flex md:justify-between';
        div.innerHTML=`
        <div class="card-content">
            <div class="text-content">
                <h2 class="text-[#002C5C] font-semibold text-[18px] mb-1 jobName">${interview.jobName}</h2>
                <p class="mb-2 text-[#64748B] text-[16px] jobTitle">${interview.jobTitle}</p>
                <p class="mb-4 text-[#64748B] text-[16px] jobType">${interview.jobType}</p>
                <span class="bg-[#10B9811a] text-[#10B981] rounded-sm py-2 px-3 uppercase text-[14px] status">INTERVIEW</span>
                <p class="mt-3 text-[#64748B] text-[16px] mb-4 jobDescription">${interview.jobDescription}</p>
            </div>
            <div class="btn flex gap-2">
                <button class="interviewBtn border-2 border-[#10B981] py-1 px-3 uppercase text-[#10B981] rounded-sm">interview</button>
                <button class="rejectedBtn border-2 border-[#EF4444] py-1 px-3 uppercase text-[#EF4444] rounded-sm">Rejected</button>

            </div>
        </div>
        <div class="card-bin mt-[30px] md:mt-0">
            <button class="deleteBtn border-2 border-[#F1F2F4] p-2 rounded-full"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `;
        filteredSection.appendChild(div);
    }
}

// Function for Rejected List
function renderRejectedList(){
    filteredSection.innerHTML = '';
    for(let rejected of RejectedList){

        console.log(rejected);

        let div = document.createElement('div');
        div.className=' bg-white rounded-md border-2 border-[#F1F2F4] p-5 my-4 md:flex md:justify-between';
        div.innerHTML=`
        <div class="card-content">
            <div class="text-content">
                <h2 class="text-[#002C5C] font-semibold text-[18px] mb-1 jobName">${rejected.jobName}</h2>
                <p class="mb-2 text-[#64748B] text-[16px] jobTitle">${rejected.jobTitle}</p>
                <p class="mb-4 text-[#64748B] text-[16px] jobType">${rejected.jobType}</p>
                <span class="bg-[#EF44441a] text-[#EF4444] rounded-sm py-2 px-3 uppercase text-[14px] status">REJECTED</span>
                <p class="mt-3 text-[#64748B] text-[16px] mb-4 jobDescription">${rejected.jobDescription}</p>
            </div>
            <div class="btn flex gap-2">
                <button class="interviewBtn border-2 border-[#10B981] py-1 px-3 uppercase text-[#10B981] rounded-sm">interview</button>
                <button class="rejectedBtn border-2 border-[#EF4444] py-1 px-3 uppercase text-[#EF4444] rounded-sm">Rejected</button>

            </div>
        </div>
        <div class="card-bin mt-[30px] md:mt-0">
            <button class="deleteBtn border-2 border-[#F1F2F4] p-2 rounded-full"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `;
        filteredSection.appendChild(div);
    }
}
