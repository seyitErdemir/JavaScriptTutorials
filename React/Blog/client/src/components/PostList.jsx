import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { Grid, Button } from '@material-ui/core'
import { Post } from './Post'

import gridFour from '../images/grid_four.svg'
import gridThree from '../images/grid_three.svg'

const useStyles = makeStyles(theme => ({
  layoutShifter: {
    float: 'right',
    margin: theme.spacing(2)
  }
}))
const PostList = () => {
  const posts = useSelector(state => state.posts.posts)

  const [layout, setLayout] = useState('gridThree')
  const calculateMd = () => {
    return layout === 'gridThree' ? 4 : 3
  }

  const classes = useStyles()
  return (
    <>
      {}
      <div className={classes.layoutShifter}>
        <Button
          variant='text'
          size='small'
          onClick={() => setLayout('gridThree')}
        >
          <img
            src={gridThree}
            alt='Three Colums Grid Icon'
            style={{ background: layout === 'gridThree' ? '#ccc' : '' }}
          ></img>
        </Button>

        <Button
          variant='text'
          size='small'
          onClick={() => setLayout('gridFour')}
        >
          <img
            src={gridFour}
            alt='Four Colums Grid Icon'
            style={{ background: layout === 'gridFour' ? '#ccc' : '' }}
          ></img>
        </Button>
      </div>
      <Grid container spacing={2} alignContent='stretch'>
        {posts.length > 0 &&
          posts.map(post => (
            <Grid item key={post?._id} xs={12} md={calculateMd()}>
              <Post {...post} />
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default PostList
