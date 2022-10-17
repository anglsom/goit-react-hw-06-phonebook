import Item from 'components/Item';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts, getFilter } from "redux/contactsSlice";


// export default function ContactList({ contacts, onDeleteContact }) {
// return (
// <ul className={css.contactList}>
//     {contacts.map(({ id, name, number }) => (
// <li key={id} className={css.contactListItem}>
// <Item
//     name={name}
//     number={number}
//     onDeleteContact={() => onDeleteContact(id)}
// />
// </li>
// ))}
// </ul>
// );
// }

// ContactList.propTypes = {
// contacts: PropTypes.arrayOf(
// PropTypes.shape({
// id: PropTypes.string.isRequired,
// name: PropTypes.string.isRequired,
// number: PropTypes.string.isRequired,
// })
// ),
// onDeleteContact: PropTypes.func.isRequired,
// };

export default function ContactList() {
const contacts = useSelector(getContacts);
const filter = useSelector(getFilter);

const getFilteredContacts = () => {
const normalizedFilter = filter.toLowerCase();

return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
);
};

const filteredContacts = getFilteredContacts();

const dispatch = useDispatch();
return (
<ul className={css.contactList}>
    {filteredContacts.map(({ id, name, number }) => (
<li key={id} className={css.contactListItem}>
<Item
    name={name}
    number={number}
    onDeleteContact={() => dispatch(deleteContact(id))}
/>
</li>
))}
</ul>
);
}