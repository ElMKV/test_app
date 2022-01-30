import { createUseStyles } from 'react-jss';

const gridStyles = {
    width: '100%',
    display: 'grid',
    gridGap: '1.5rem',
    gridTemplateColumns: '5% 15% 20% 30% 10% 10%',
    fontSize: '20px',
    color: "white"
}
const useStyle = createUseStyles({
  TasksTable: {
    padding: {
      top: "15px",
      right: "30px",
      left: "30px",
      bottom: "15px",
    },
  },
  tasksTableHeader: {
    ...gridStyles,
    borderBottom: "1px solid white",
  },
  tasksTableRow: {
    ...gridStyles,
    padding: {
      top: "15px",
      bottom: "15px",
    },
    borderBottom: "1px solid white",
  },
  previusAndNextButton: {
    padding: {
      top: "10px",
      right: "30px",
      left: "30px",
      bottom: "10px",
    },

    width: "100%",
    display: "grid",
    justifyContent: "center",
    gridGap: "1.5rem",
    gridTemplateColumns: "20% 60% 20%",
    gridTemplateRows: "30px",

    "& button": {
      backgroundColor: "white",
    },
  },
});

export default useStyle;