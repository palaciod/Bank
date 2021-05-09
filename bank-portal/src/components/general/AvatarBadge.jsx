import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Michael01 from "../../images/Michael01.jpg";
import { green } from '@material-ui/core/colors';
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 5,
    top: 30,
    border: `2px solid ${theme.palette.background.paper}`,
  }
}))(Badge);


const innerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: green[500],
      },
    },
  });

export default function CustomizedBadges() {
  return (
    <ThemeProvider theme={innerTheme}>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={""} color="secondary">
                <Avatar alt="Michael Sharp" src={Michael01} />
            </StyledBadge>
        </IconButton>
    </ThemeProvider>
    
  );
}