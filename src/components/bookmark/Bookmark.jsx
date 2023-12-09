import './bookmark.css'

const Bookmark = (props) => {
    const { title } = props.props
    return (
        <div className="bookMarkDetails">
            <h1>{title}</h1>
        </div>
    );
};

export default Bookmark;