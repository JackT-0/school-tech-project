const addTaskButton = document.getElementById("add-task-button");
const listContainer = document.getElementById("list-container");
const categoryContainer = document.getElementById("list-categories");
const subjectTitle = document.getElementById("subject-title");
const listItems = document.getElementById("list-items");

let lists = ["Default", "Test"]
let tasks = 
[
{
    listGroup: "Default",
    taskHeader:"header",
    taskDescription:"text",
    taskImportance:"neutral",
    taskDate: "Jan 1 2000"
},
{
    listGroup: "Test",
    taskHeader:"header2",
    taskDescription:"text",
    taskImportance:"neutral",
    taskDate: "Jan 20 2010"
},
{
    listGroup: "Test",
    taskHeader:"header3",
    taskDescription:"text",
    taskImportance:"neutral",
    taskDate: "Jan 20 2010"
}
]

refreshLists ();

//Makes icons and lists below lists
function refreshLists ()
{
    listContainer.textContent = "";
    
    for (let i = 0; i < lists.length; i++)
    {
        const createList = document.createElement("li");
        const createI = document.createElement("i");
        createI.classList.add("fa-solid", "fa-folder", "fa-sm");

        listContainer.appendChild(createList);
        createList.appendChild(createI);
        const header = document.createTextNode(lists[i]);
        createList.appendChild(header);
    }
}

categoryContainer.addEventListener("pointerdown", e =>
{
    if (e.target && e.target.nodeName == "LI")
    {
        const categoryName = e.target.textContent;
        console.log(e.target);
        changeList (categoryName);
    }
}
);

listContainer.addEventListener("pointerdown", e =>
{
    if (e.target && e.target.nodeName == "LI")
    {
        const listName = e.target.textContent;
        console.log(e.target);
        changeList (listName);
    } 
}
);

function changeList (listName) 
{
    subjectTitle.innerHTML = listName;
    refreshTasks (listName);
}

//Deletes all the tasks on screen, and then
//creates tasks on screen that match 
function refreshTasks (listName)
{
    listItems.textContent = "";
    for (let i = 0; i < tasks.length; i++)
    {
        if (tasks[i].listGroup === listName)
        {
            const createTaskCard = document.createElement("div");
            listItems.appendChild(createTaskCard)
            createTaskCard.classList.add("task-card", "flex");

            const createTaskInfo = document.createElement("div");
            createTaskCard.appendChild(createTaskInfo)

            const createTaskH2 = document.createElement("H2");
            createTaskInfo.appendChild(createTaskH2);
            const textNodeH2 = document.createTextNode(tasks[i].taskHeader);
            createTaskH2.appendChild(textNodeH2)

            const createTaskP = document.createElement("P");
            createTaskInfo.appendChild(createTaskP);
            const textNodeP = document.createTextNode(tasks[i].taskDescription)
            createTaskP.appendChild(textNodeP)

            const createTaskH4 = document.createElement("H4");
            createTaskInfo.appendChild(createTaskH4);
            const textNodeH4 = document.createTextNode(tasks[i].taskDate)
            createTaskH4.appendChild(textNodeH4)

            const createTaskButton = document.createElement("button");
            createTaskCard.appendChild(createTaskButton)
            createTaskButton.classList.add("trash-icon")

            const CreateI = document.createElement("i");
            createTaskButton.appendChild(CreateI)
            CreateI.classList.add("fa-solid", "fa-trash")
        }
    }
};



//* To-Do
/*
Todo: Add modals so users can add their own lists/tasks
Todo: Ability to delete tasks and lists
Todo: Add styling for Important tasks
Todo: Sort important tasks on top
Todo: Add system to get current date for task creation
Todo: add system to sort by current day
Todo: make list overflow scrollable
*/

//? Extras
/*
? Browser Save tasks
? Multiple Themes
? Profiles
*/
