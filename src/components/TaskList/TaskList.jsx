import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import css from './TaskList.module.css';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter, getTasks } from '../../redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter (task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed)
  
    default:
      return tasks;
  }
}

export default function TaskList () {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter)

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
