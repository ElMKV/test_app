import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "../Modal/Modal";
import axios from 'axios';
import { getEmployers } from '../../store/actions/employers-actions';

const EditEmployer = ({ active, onClose, id }) => {
    const [ready, setReady] = useState(false);
    const [form, setForm] = useState({
        id: 0,
        boss: null,
        position: 1,
        fio: "",
        companyName: ""
    });

    const dispatch = useDispatch();
    const employers = useSelector((state) => state.employers.employers);

    useEffect(() => {
        getEmployer()
    }, [])


    const getEmployer = async () => {
        try {
            const { data } = await axios.get("http://localhost:8091/employer/" + id)
            console.log(data);
            setForm({
                ...form,
                id: data.id,
                boss: data.boss,
                position: data.position,
                fio: data.fio,
                companyName: data.companyName
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

        if(form.boss != null)
        {
            try {
                const res = await axios.put("http://localhost:8091/employer/" + id, {
                    // id: form.id,
                    position: form.position,
                    companyName: form.companyName,
                    fio: form.fio
                })
                const response = await axios.put("http://localhost:8091/employer/" + id + "/boss/" + form.boss);

                if (res && response) {
                    dispatch(getEmployers());
                    onClose();
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        else{
            try {
                const res = await axios.put("http://localhost:8091/employer/" + id, {
                    // id: form.id,
                    position: form.position,
                    companyName: form.companyName,
                    fio: form.fio
                })      
            }
            catch (e) {
                console.error(e);
            }
        }
        
    }

    const renderForm = () => {
        if (ready && employers.length > 0) {
            return (
                <form onSubmit={handleSubmit}>
                    <input name='fio' type='text' placeholder='ФИО' value={form.fio} onChange={e => handleChange(e)} />
                    <input name='companyName' type='text' placeholder='Название компании' value={form.companyName} onChange={e => handleChange(e)} />
                    <input name='position' type='number' min='0' placeholder='Позиция' value={form.position} onChange={e => handleChange(e)} />
                    <select defaultValue={form.boss !== null ? form.boss.id : form.boss} name='boss' onChange={e => handleChange(e)}>
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

export default EditEmployer
