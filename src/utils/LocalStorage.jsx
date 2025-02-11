
const employees = [
    {
        "id": 101,
        "name": "John Doe",
        "password": "a1b",
        "email": "employee1@example.com",
        "tasks": [
            {
                "taskTitle": "Design Landing Page",
                "taskDate": "2025-02-10",
                "taskDescription": "Create a responsive landing page UI.",
                "category": "Design",
                "activeTask": true,
                "failedTask": false,
                "newTask": false,
                "completed": false
            },
            {
                "taskTitle": "Fix Navbar Bug",
                "taskDate": "2025-02-12",
                "taskDescription": "Resolve alignment issues in the navbar.",
                "category": "Development",
                "activeTask": false,
                "failedTask": false,
                "newTask": true,
                "completed": false
            }
        ],
        "activeTasks": 1,
        "failedTasks": 0,
        "newTasks": 1,
        "completedTasks": 0
    },
    {
        "id": 102,
        "name": "Jane Smith",
        "password": "c2d",
        "email": "employee2@example.com",
        "tasks": [
            {
                "taskTitle": "Backend API Testing",
                "taskDate": "2025-02-11",
                "taskDescription": "Test all API endpoints for user authentication.",
                "category": "Backend",
                "activeTask": false,
                "failedTask": false,
                "newTask": false,
                "completed": true
            },
            {
                "taskTitle": "Database Optimization",
                "taskDate": "2025-02-14",
                "taskDescription": "Optimize SQL queries to improve response time.",
                "category": "Database",
                "activeTask": true,
                "failedTask": false,
                "newTask": false,
                "completed": false
            },
            {
                "taskTitle": "Server Maintenance",
                "taskDate": "2025-02-15",
                "taskDescription": "Perform scheduled maintenance and updates.",
                "category": "IT Support",
                "activeTask": false,
                "failedTask": false,
                "newTask": true,
                "completed": false
            }
        ],
        "activeTasks": 1,
        "failedTasks": 0,
        "newTasks": 1,
        "completedTasks": 1
    },
    {
        "id": 103,
        "name": "Emily Clark",
        "password": "e3f",
        "email": "employee3@example.com",
        "tasks": [
            {
                "taskTitle": "Client Meeting",
                "taskDate": "2025-02-10",
                "taskDescription": "Discuss project requirements with the client.",
                "category": "Management",
                "activeTask": false,
                "failedTask": false,
                "newTask": false,
                "completed": true
            },
            {
                "taskTitle": "Write Documentation",
                "taskDate": "2025-02-13",
                "taskDescription": "Prepare technical documentation for the API.",
                "category": "Documentation",
                "activeTask": true,
                "failedTask": false,
                "newTask": false,
                "completed": false
            }
        ],
        "activeTasks": 1,
        "failedTasks": 0,
        "newTasks": 0,
        "completedTasks": 1
    },
    {
        "id": 104,
        "name": "Michael Brown",
        "password": "g4h",
        "email": "employee4@example.com",
        "tasks": [
            {
                "taskTitle": "Fix UI Bugs",
                "taskDate": "2025-02-10",
                "taskDescription": "Resolve UI glitches in the dashboard.",
                "category": "Development",
                "activeTask": true,
                "failedTask": false,
                "newTask": false,
                "completed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDate": "2025-02-12",
                "taskDescription": "Review the latest feature implementation.",
                "category": "Development",
                "activeTask": false,
                "failedTask": true,
                "newTask": false,
                "completed": false
            },
            {
                "taskTitle": "Prepare Sprint Report",
                "taskDate": "2025-02-16",
                "taskDescription": "Analyze progress and prepare a report.",
                "category": "Management",
                "activeTask": false,
                "failedTask": false,
                "newTask": true,
                "completed": false
            }
        ],
        "activeTasks": 1,
        "failedTasks": 1,
        "newTasks": 1,
        "completedTasks": 0
    },
    {
        "id": 105,
        "name": "Sarah Lee",
        "password": "i5j",
        "email": "employee5@example.com",
        "tasks": [
            {
                "taskTitle": "Security Audit",
                "taskDate": "2025-02-14",
                "taskDescription": "Perform a security check on the system.",
                "category": "Cybersecurity",
                "activeTask": false,
                "failedTask": false,
                "newTask": false,
                "completed": true
            },
            {
                "taskTitle": "Update CMS",
                "taskDate": "2025-02-15",
                "taskDescription": "Upgrade the content management system.",
                "category": "IT Support",
                "activeTask": false,
                "failedTask": true,
                "newTask": false,
                "completed": false
            },
            {
                "taskTitle": "Develop New Feature",
                "taskDate": "2025-02-17",
                "taskDescription": "Implement user notifications feature.",
                "category": "Development",
                "activeTask": true,
                "failedTask": false,
                "newTask": false,
                "completed": false
            },
            {
                "taskTitle": "Bug Fixing",
                "taskDate": "2025-02-18",
                "taskDescription": "Resolve reported software bugs.",
                "category": "Development",
                "activeTask": false,
                "failedTask": false,
                "newTask": true,
                "completed": false
            }
        ],
        "activeTasks": 1,
        "failedTasks": 1,
        "newTasks": 1,
        "completedTasks": 1
    }
];

const admin = [{
    "id": 1,
    "name":"himesh",
    "password": "x9y",
    "email": "admin@example.com"
}]
export const setLocalStorage= ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage= ()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
   return {employees,admin}
}