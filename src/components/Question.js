import React from "react"
import {Avatar,Typography,Card,Button,Grid,LinearProgress} from "@material-ui/core"
import { CardContent, CardActions, CardHeader } from "@material-ui/core"
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
        <Typography>Do something</Typography>
        <LinearProgress className="lineProgress" variant="determinate" value={10} />
        <Typography style={{ marginTop: 20 }}>Do something</Typography>
        <LinearProgress className="lineProgress" variant="determinate" value={90} />
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  </Grid>
)

export default Question