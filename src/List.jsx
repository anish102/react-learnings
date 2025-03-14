import PropTypes from "prop-types";

function List({ category = "Category", items = [] }) {
    console.log(category,items)
    // items.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name
    // items.sort((a, b) => a.calories - b.calories); //Sort by calories

    const listitems = items.map((item) => (
        <li key={item.id}>
            {item.name}:&nbsp;<b>{item.calories}</b>
        </li>
    ));
    return (<><h3>{category}</h3> <ol>{listitems}</ol></>);
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number }))
}

export default List;
