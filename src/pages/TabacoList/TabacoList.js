import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import ListItem from './ListItem'

const mockData = [
  {
    title: "fsdaf",
    description: "f;sdkm",
    date: "fsdnjk"
  }
]

 class TabacoList extends PureComponent {
    state = {
      searchValue: '',
    }

    handleChangeSearch = (event) => {
      this.setState({ searchValue: event.target.value });
    }


    render() {
      const { classes } = this.props;
      const { searchValue } = this.state;

      return (
        <Grid container spacing={12}>
          <Grid item xs={12} className={classes.searchInput}>
            <TextField id="search" fullWidth label="Search" value={searchValue} onChange={this.handleChangeSearch}/>
          </Grid>
          {mockData.filter((item) => !!~item.title.search(searchValue)).map((item) => (
            <Grid item xs={4} className={classes.listItem}>       
              <ListItem
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      )
    }
}

export default withStyles((theme) => ({
  listItem: {
    paddingBottom: theme.spacing.unit,
  },
  searchInput: {
    paddingBottom: theme.spacing.unit
  }
}))(TabacoList)