import { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { createTask,deleTask,updateTask,getTask } from '../api/tasks.api'
import { useNavigate,useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'




export  function TaskFormPage(){
    const {register, handleSubmit,formState: errors,setValue} = useForm()
    const navigate = useNavigate()
    const params=useParams()
    console.log(params)
    const onSubmit = handleSubmit( async data =>{

        if (params.id){
            console.log('actualizando')
            await updateTask(params.id,data)
            toast.success('Tarea actualizada')
        } else{
            await createTask(data)
            toast.success('Tarea creada')
        }
        navigate('/tasks')

    })

    useEffect(()=>{

        async function loadTask(){
        if (params.id){
           const res = await getTask(params.id)
           setValue('title', res.data.title)
           setValue('description', res.data.description)
        }
    }
    loadTask()
    },[])

    return(
        <div className='max-w-xl mx-auto'>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="title"  {...register("title",{required: true})}
            className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'/>
            {errors.title && <span>Este campo es requerido</span>}
            <textarea rows='3' placeholder="description"{...register("description",{required: true})}
            className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'></textarea>
            {errors.description  && <span>Este campo es requerido</span>}
            <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>
        </form>

        { params.id && 
        <button onClick={ async ()=>{
            const accepted =window.confirm('Estas seguro ?')
            if (accepted){
                await deleTask(params.id)
                toast.success('Tarea eliminada')
                navigate('/tasks')
            }
        }}
        className='bg-red-500 p-3 rounded-lg w-48 mt-3'>Delete</button>
         }
    
        </div>
    )
}

