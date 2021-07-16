import React , {Component} from "react"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import  AddIcon  from "@material-ui/icons/Add"
import './AddPollBtn.css'



class AddPollBtn extends Component {
    state = {  }
    render() { 
        return (  
            <Button variant="fab" color="secondary" className="btnStyle" component={Link} to="/add">
                <AddIcon />
            </Button>
        );
    }
}
 
export default AddPollBtn;

