import axios from 'axios'

const taskApi =axios.create({
    baseURL:'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = ()=>{
    return taskApi.get('/');
}

export const createTask = (task)=>{
    return taskApi.post('/',task);
}
export const deleTask = (id)=>{
    taskApi.delete('/'+ id)
}

export const updateTask = (id,task) =>taskApi.put(`/ ${id}/`,task)

export const  getTask = (id) => taskApi.get(`/ ${id}/`)