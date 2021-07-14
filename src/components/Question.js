import React from "react"
import {Avatar,Typography,Card,Button,Grid,LinearProgress,List,IconButton} from "@material-ui/core"
import { CardContent, CardActions, CardHeader } from "@material-ui/core"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { RadioButtonChecked, RadioButtonUnchecked } from "@material-ui/icons"
import DeleteIcon from "@material-ui/icons/Delete"
import PollOption from "./PollOption"
import './Question.css'



const Question = () => (
  <Grid item xs={12} sm={6} lg={4} xl={3}>
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Recipe">S</Avatar>}
        title="have horrible short term memory"
        subheader="September 10, 2021"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Would You Rather
        </Typography>
        <div>
          <List dense>
          <PollOption text="Learn Redux" isChecked percent={70} />
            <PollOption
              text="Do something"
              isChecked={false}
              percent={50}
            />
            
          </List>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Answer
        </Button>
        <IconButton aria-label="Delete" style={{ marginLeft: "auto" }}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  </Grid>
)

export default Question