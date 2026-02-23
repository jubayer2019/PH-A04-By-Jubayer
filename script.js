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
const filteredSection = document.getElementById('filteredSection');

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

// Event Listener for Pushing Array List

jobCardsContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('interviewBtn')){
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

        const jobExist = InterviewList.find(item=> item.jobName == cardInfo.jobName)
        parentNode.querySelector('.status').innerText = 'INTERVIEW'
        if(!jobExist){
            InterviewList.push(cardInfo);
        }
        renderInterviewList()
    }

})

function renderInterviewList(){
    filteredSection.innerHTML = '';
    for(let interview of InterviewList){

        console.log(interview);

        let div = document.createElement('div');
        div.className=' bg-white rounded-md border-2 border-[#F1F2F4] p-5 my-4 md:flex md:justify-between';
        div.innerHTML=`
        <div class="card-content">
            <div class="text-content">
                <h2 class="text-[#002C5C] font-semibold text-[18px] mb-1 jobName">Mobile First Corp</h2>
                <p class="mb-2 text-[#64748B] text-[16px] jobTitle">React Native Developer</p>
                <p class="mb-4 text-[#64748B] text-[16px] jobType">Remote    •    Full-time    •    $130,000 - $175,000</p>
                <span class="bg-[#EEF4FF] py-2 px-3 uppercase text-[14px] status">Not Applied</span>
                <p class="mt-3 text-[#64748B] text-[16px] mb-4 jobDescription">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
            </div>
            <div class="btn flex gap-2">
                <button class="border-2 border-[#10B981] py-1 px-3 uppercase text-[#10B981] rounded-sm">interview</button>
                <button class="border-2 border-[#EF4444] py-1 px-3 uppercase text-[#EF4444] rounded-sm">Rejected</button>

            </div>
        </div>
        <div class="card-bin mt-[30px] md:mt-0">
            <button class="border-2 border-[#F1F2F4] p-2 rounded-full"><img src="./img/bin.png" alt=""></button>
        </div>
        `;
        filteredSection.appendChild(div);
    }
}