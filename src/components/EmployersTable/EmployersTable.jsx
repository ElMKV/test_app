import { getEmployers, removeEmployers } from "../../store/actions/employers-actions";
import useStyle from './employersTableStyles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import EditEmployer from "../EditEmployer/EditEmployer";
import Pagination from "../Pagination/Pagination";


const EmployersTable = () => {
    const [active, setActive] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyle();
    const dispatch = useDispatch()
    const employers = useSelector((state) => state.employers.employers)

      const [posts, setPosts] = useState([]);
      const [error, setError] = useState("");

    useEffect(() => {
        dispatch(getEmployers())
    },
        []);

    const handleEdit = (id) => {
        setActive(true);
        setCurrentId(id);
    }
    const handleClose = () => {
        setActive(false);
        setCurrentId(0);
    }

    return (
      <div className={classes.employersTable}>
        <div className={classes.employersTableHeader}>
          <div>ID</div>
          <div>ФИО</div>
          <div>Руководитель</div>
          <div>Филиал</div>
          <div>Задачи</div>
        </div>
        <div>
          <Pagination
            data={employers}
            RenderComponent={
              employers.length > 0 &&
              employers.map((item) => (
                <div key={item.id} className={classes.employersTableRow}>
                  <div>{item.id}</div>
                  <div>{item.fio}</div>
                  <div>{item.boss !== null ? item.boss.fio : "-"}</div>
                  <div>{item.companyName}</div>
                  <div>{item.tasksCount}</div>

                  <button
                    style={{ backgroundColor: "red", color: "white" }}
                    onClick={() => dispatch(removeEmployers(item.id))}
                  >
                    Удалить
                  </button>
                  <button
                    style={{ backgroundColor: "green", color: "white" }}
                    onClick={() => handleEdit(item.id)}
                  >
                    Редактировать
                  </button>
                </div>
              ))
            }
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </div>
        {currentId > 0 && (
          <EditEmployer
            id={currentId}
            active={active}
            onClose={() => handleClose()}
          />
        )}
      </div>
    );
};

export default EmployersTable
