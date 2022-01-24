import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import TableHeader from '../../components/TableHeader/TableHeader';
import TasksTable from '../../components/TasksTable/TasksTable';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


const Tasks = () => {
    const [active, setActive] = useState(false);
    const tasks = useSelector((state) => state.tasks.tasks);
    const employers = useSelector((state) => state.employers.employers);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        Array.from(e.target).forEach((item) => {
            if (item.nodeName != 'BUTTON') {
                data[item.name] = item.value;
            }
        })

        const id = data.executor;
        data.executor = null;
        console.log(data);
        const res = await axios({
            method: 'post',
            url: 'http://localhost:8091/task/' + id,
            data: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(res);

    }

    return (
        <>
            <TableHeader
                textButton='Добавить задачу'
                handleClick={() => setActive(true)}
            />
            <TasksTable />
            <Modal isActive={active} onClose={() => setActive(false)}>
                <form onSubmit={handleSubmit}>
                    <input name='priority' type='number' defaultValue={1} min='0' placeholder='Позиция' />
                    <input name='description' type='text' placeholder='Описание задачи' />
                    <select name='executor' type="number">
                        <option value={null}>
                            {'-'}
                        </option>
                        {employers && employers.map(item => (
                            <option value={item.id}>
                                {item.fio}
                            </option>
                        ))}
                    </select>
                    <button style={{ backgroundColor: "red" }} type='button'>Отменить</button>
                    <button style={{ backgroundColor: "green" }} type='submit'>Сохранить</button>
                </form>
            </Modal>
        </>
    );
};

export default Tasks;
