import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "../Modal/Modal";
import axios from 'axios';

const EditTask = ({ active, onClose, id }) => {
    const [ready, setReady] = useState(false);
    const [form, setForm] = useState({
        id: 0,
        executor: null,
        priority: 0,
        description: ""
    });

    const employers = useSelector((state) => state.employers.employers);
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);

    useEffect(() => {
        getTasks()
    }, [])


    const getTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8091/task/" + id)
            console.log(data);
            setForm({
                ...form,
                id: data.id,
                priority: data.priority,
                description: data.description,
                executor: data.executor,
            });
            setReady(true);
        }
        catch {

        }
    }

    const handleChange = (e) => {
        console.log(e.target);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(form.executor != "-")
        {
            try {
                const res = await axios.put("http://localhost:8091/task/" + id + "/executor/" + form.executor,
                    {
                        id: form.id,
                        description: form.description,
                        priority: form.priority,
                        executor: form.executor,
                    })

                if (res) {
                    console.log(form.description);
                    dispatch(getTasks());
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        else{
            console.log("ок");
        }
        
    }

    const renderForm = () => {
        if (ready && tasks.length > 0) {
            const filteredEmployers = tasks.filter(item => item.id !== id)
            return (
                <form onSubmit={handleSubmit}>
                    <input name='description' type='text' placeholder='Описание' value={form.description} onChange={e => handleChange(e)} />
                    <input name='priority' type='number' min='1' placeholder='Приоритет' value={form.priority} onChange={e => handleChange(e)} />
                    <select defaultValue={form.executor !== null ? form.executor.id : form.executor} name='executor' onChange={e => handleChange(e)}>
                        <option value={null}>
                            {'-'}
                        </option>
                        {employers.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.fio}
                            </option>
                        ))}
                    </select>
                    <button style={{ backgroundColor: "red" }} type='button'>Отменить</button>
                    <button style={{ backgroundColor: "green" }} type='submit'>Сохранить</button>
                </form>
            )
        } else {
            return <div>Загрузка формы</div>

        }
    }

    return (
        <Modal isActive={active} onClose={onClose}>
            {renderForm()}
        </Modal>
    )
}

export default EditTask
