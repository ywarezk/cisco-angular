## Summary services and rest student exercise

- Create a factory that returns a class called **Task**
    * title : string
    * description : string
    * group : string
    * date : Date
    * id : number
- Create a singleton that returns an instance of a class called **taskService**
     * getTasks - get all the tasks from the server
     * createTask - post a new task to the server, gets an argument of Task
- Our server is at the url: https://nztodo.herokuapp.com/api/task/
- To get the data in json ?format=json
- controller: **MainController**
- template for the controller that displays the list of tasks
- form to create a new **Task**
