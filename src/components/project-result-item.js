import '../pages/css/search-results.css';
import { Box, Tab, Tabs, Typography, TextField, Button, IconButton, Pagination, Chip, Stack, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Checkbox, ListItemText } from '@mui/material';



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

    const isNull = (value) => {
        if (value == "NaN" || value == "NAN" || value == "nan" || value == "null" || value == "Null" || value == "NULL" || value == null || value == undefined || value == "" || value == "NNA" || value == "nna" || value == "Nna" || !value) {
            return true;
        } else {
            return false;
        }
    }

    const openGroup = (id) => {
        window.location.href = "group-content?group-id=" + id;
    }

    return (
        <div className="Result-information" >
            <p onClick={goToContent} style={{ fontWeight: "600", color: "#2C5697", fontSize: "14pt", cursor: "pointer" }}>{addEllipsis(props.title)}</p>
            {
                !isNull(props.description) && (
                    <p style={{ marginTop: "1rem" }}>{addEllipsis(props.description)}</p>
                )
            }
            {
                props.authors && !isNull(props.authors) && (
                    <Stack style={{ marginTop: "1rem" }} direction="column" spacing={1}>
                        {
                            props.authors.map((author, index) => {
                                if (!isNull(author.nombre) && index == 0) {
                                    return (
                                        <Chip onClick={(e) => openGroup(author.id)} style={{backgroundColor: "#F8CD00", color: "black", cursor: "pointer"}} key={"author_" + index} label={author.nombre.charAt(0).toUpperCase() + author.nombre.slice(1)} color="primary" />
                                    )
                                }
                            })
                        }
                    </Stack>
                )
            }
            {
                props.communities && !isNull(props.communities[0]) && (
                    <Stack style={{ marginTop: "1rem" }} direction="row" spacing={1}>
                        {
                            props.communities.map((community, index) => {
                                if (!isNull(community)) {
                                    return (
                                        <Chip key={"community_" + index} label={community.charAt(0).toUpperCase() + community.slice(1)} variant="outlined" color="primary" />
                                    )
                                }
                            })
                        }
                    </Stack>
                )
            }
        </div>
    );
}
