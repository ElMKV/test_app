import axios from "axios";

export const getEmployers = () => async (dispatch) => {
    try{
        const {data} = await axios.get('http://localhost:8091/employer');
        dispatch({
            type: 'SET_EMPLOYERS',
            payload: data
        })
    }
    catch(e){
        console.log(e.message);
    }
};

export const removeEmployers = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete('http://localhost:8091/employer/'+ id);
        dispatch(getEmployers());
    }
    catch (e) {
        console.log(e.message);
        alert("Невозможно удалить, пока существуют задачи или подчиненный");

    }
};
