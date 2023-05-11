import '../pages/css/search-results.css';

export default function ProjectResultItem(props) {

    const goToContent = () => {
        switch (props.type) {
            case "project":
                window.location.href = "project-content?project-id=" + props.id;
                break;
            case "group":
                window.location.href = "group-content?group-id=" + props.id;
                break;
            case "researcher":
                window.location.href = "researcher-content?researcher-id=" + props.id;
                break;
        }
    }

    function addEllipsis(text) {
        if (text.length > 150) {
            return text.slice(0, 150) + '...';
        }
        return text;
    }

    return (
        <div className="Result-information" >
            <p onClick={goToContent} style={{ fontWeight: "600", color: "#2C5697", fontSize: "14pt", cursor: "pointer" }}>{addEllipsis(props.title)}</p>
            {
                props.description != "NaN" && (
                    <p style={{ marginTop: "1rem" }}>{addEllipsis(props.description)}</p>
                )
            }
            {
                props.authors != "NaN" && (
                    <p style={{ marginTop: "1rem" }}>{addEllipsis(props.authors)}</p>
                )
            }
        </div>
    );
}
