// const schedules = [
//     { id: "a", dependencies: ["b", "c"] },
//     { id: "b", dependencies: ["d"] },
//     { id: "c", dependencies: ["e"] },
//     { id: "d", dependencies: [] },
//     { id: "e", dependencies: ["f"] },
//     { id: "f", dependencies: [] },
// ]


// let counter = 0;
// const executeTasks = () => {
//     for (let i = 0; i < schedules.length; i++) {
//         const task = schedules[i];
//         if (!task.dependencies.length) {
//             console.log(task[id]);
//             task.executed = true;
//             remove(task.id);
//         }
//     }
// }

// const remove = (id) => {
//     schedules.forEach(e => {
//         const index = e.dependencies.indexOf(id);
//         if (index !== -1) {
//             task.dependencies.splice(index, 1);
//         }
//     })
// }


const schedules = [
    { id: "a", dependencies: ["b", "c"] },
    { id: "b", dependencies: ["d"] },
    { id: "c", dependencies: ["e"] },
    { id: "d", dependencies: [] },
    { id: "e", dependencies: ["f"] },
    { id: "f", dependencies: [] },
  ];

//   d f b e c a 
  
  function executeTask(task) {
    console.log(`Task ${task.id} executed.`);
  }
  
  function executeTasksInOrder(tasks, executedTasks) {
    // If all tasks have been executed, we're done
    if (executedTasks.length === tasks.length) {
      return;
    }
  
    // Loop through each task and check if its dependencies have been executed
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      const dependencies = task.dependencies;
  
      // If all dependencies have been executed, execute the task and add it to the executed tasks list
      if (dependencies.every(dep => executedTasks.includes(dep))) {
        executeTask(task);
        executedTasks.push(task.id);
      }
    }
  
    // Call the function recursively to execute the next set of tasks
    executeTasksInOrder(tasks, executedTasks);
  }
  
  executeTasksInOrder(schedules, []);
  