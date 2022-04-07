
export default function TodoItem(props) {
    const styles = {
        li: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '.5rem'
        },
        input: {
            marginRight: '1rem'
        }
    }

    return <li style={styles.li}>
        <span>
            <input type="checkbox" style={styles.input} />
            <strong>{props.index + 1}</strong>{props.todo.title}
        </span>
        <button>&times;</button>
    </li>

}