import { motion, AnimatePresence } from "framer-motion";

export default function TasksList({ list, onEdit, onDelete }) {
  return (
    <ul className="list-container">
      <AnimatePresence>
        {list.map((string, i) => (
          <motion.li 
            layout
            key={i}
            className="listItem"
            initial={{ x: -200, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
          > 
              <div className="taskText">{string}</div>
              <div className="editButton" 
                   onClick={() => onEdit(i, prompt('Edit task:', list[i]))}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
              </div>
              <div className="deleteButton" 
                   onClick={() => onDelete(i)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
              </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
