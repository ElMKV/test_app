import axios from "axios";

export const getTasks = () => async (dispatch) => {
    try{
        const {data} = await axios.get('http://localhost:8091/task');
        dispatch({
          type: "SET_TASKS",
          payload: data,
        });
    }
    catch(e){
        console.log(e.message);
    }
};

export const removeTask = (id) => async (dispatch) => {
    console.log(id);

    try {
        const { data } = await axios.delete('http://localhost:8091/task/' + id);
        dispatch(getTasks());
    }
    catch (e) {
        console.log(e.message);
    }
}

