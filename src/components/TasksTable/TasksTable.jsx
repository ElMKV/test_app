import { getTasks, removeTask } from "../../store/actions/tasks-actions";
import useStyle from './tasksTableStyles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import EditTask from "../EditTask/EditTask";

const TasksTable = () => {
    
    const classes = useStyle();
    const [active, setActive] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks.tasks)

    useEffect(() => {
        dispatch(getTasks())
    }, []);
    const handleEdit = (id) => {
        setActive(true);
        setCurrentId(id);
    }
    const handleClose = () => {
        setActive(false);
        setCurrentId(0);
    }

    return (

        <div className={classes.TasksTable}>
            <div className={classes.tasksTableHeader}>
                <div>ID</div>
                <div>Приоритет</div>
                <div>Описание</div>
                <div>Исполнитель</div>
            </div>
            <div>
                {tasks.length > 0 && tasks.map((item) => (
                    <div className={classes.tasksTableRow}>
                        <div>{item.id}</div>
                        <div>{item.priority}</div>
                        <div>{item.description}</div>
                        <div>{item.executor.fio}</div>
                        <button style={{ backgroundColor: "red", color: "white" }} onClick={() => dispatch(removeTask(item.id))}>Удалить</button>
                        <button style={{ backgroundColor: "green", color: "white" }} onClick={() => handleEdit(item.id)}>Редактировать</button>
                    </div>
                ))}
            </div>
            {currentId > 0 && <EditTask id={currentId} active={active} onClose={() => handleClose()} />}

        </div>
    );
};

export default TasksTable