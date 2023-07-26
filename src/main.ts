import './css/style.css';
import ListItem from './model/ListItem';

const item = new ListItem('id1', 'apprendre le code', false);
console.log(item.item);
item.checked = true;
console.log(item.checked);
