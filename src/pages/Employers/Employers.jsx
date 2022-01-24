import EmployersTable from '../../components/EmployersTable/EmployersTable';
import TableHeader from '../../components/TableHeader/TableHeader';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getEmployers } from "../../store/actions/employers-actions";

const Employers = () => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(false);
    const employers = useSelector((state) => state.employers.employers);
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = {};

        Array.from(e.target).forEach((item) => {
            if (item.nodeName != 'BUTTON' ){
                data[item.name] = item.value;
            }
        })
        data.boss = null;
        const res = await axios({
            method: 'post',
            url: 'http://localhost:8091/employer',            
           
            data: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },

        });
        console.log(res);
    }

    return (
        <>
            <TableHeader
                textButton='Добавить сотрудника'
                handleClick={() => setActive(true)}
            />
            <EmployersTable />
            <Modal isActive={active} onClose={() => setActive(false)}>
                <form onSubmit={handleSubmit}>
                    <input name='fio' type='text' placeholder='ФИО' />
                    <input name='companyName' type='text' placeholder='Название компании' />
                    <input name='position' type='number' defaultValue={1} min='0' placeholder='Позиция' />
                    <button style={{ backgroundColor: "red" }} type='button'>Отменить</button>
                    <button style={{backgroundColor: "green"}} onClick={() => dispatch(getEmployers())}>Сохранить</button>
                </form>
            </Modal>
        </>
    );
};

export default Employers;
