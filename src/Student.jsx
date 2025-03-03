import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
// Default by destructuring
// function Student({ name = "Test", age = 22, isStudent = true }) {
//     return (
//         <div className="student">
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             <p>Student: {isStudent ? "Yes" : "No"}</p>
//         </div>
//     );
// }

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 22,
    isStudent: true,
}

export default Student
