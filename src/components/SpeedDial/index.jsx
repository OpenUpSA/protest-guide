import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { capitalize } from '@material-ui/core/utils/helpers';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ShareIcon from '@material-ui/icons/Share';

import Icon from '@mdi/react'
import { mdiFacebook, mdiTwitter, mdiWhatsapp } from '@mdi/js'

import addStyles from './styles';

const actions = [
  {
    icon: <Icon path={mdiFacebook} size={1} color='#D34727'/>,
    name: 'Facebook',
    href: 'https://www.facebook.com/sharer/sharer.php?u=https%3A//protestguide.netlify.com/'
  },
  {
    icon: <Icon path={mdiTwitter} size={1} color='#D34727'/>,
    name: 'Twitter',
    href: 'https://twitter.com/home?status=https%3A//protestguide.netlify.com/'
  },
  {
    icon: <Icon path={mdiWhatsapp} size={1} color='#D34727'/>,
    name: 'Whatsapp',
    href: 'whatsapp://send?text=https://protestguide.netlify.com'
  },
];

class SpeedDials extends React.Component {
  state = {
    direction: 'down',
    open: false,
    hidden: false,
  };

  handleClick = (location) => {
    window.open(location);
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { direction, hidden, open } = this.state;

    const speedDialClassName = classNames(
      classes.speedDial,
      classes[`direction${capitalize(direction)}`],
    );

    return (
      <div className={classes.root}>
        <div className={classes.exampleWrapper}>
          <SpeedDial
            ariaLabel="Share this page"
            className={speedDialClassName}
            hidden={hidden}
            icon={<ShareIcon className={classes.rotateIcon}/>}
            onBlur={this.handleClose}
            onClick={this.handleClick}
            onClose={this.handleClose}
            onFocus={this.handleOpen}
            onMouseEnter={this.handleOpen}
            onMouseLeave={this.handleClose}
            open={open}
            direction={direction}
          >
            {actions.map(action => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={() => this.handleClick(action.href)}
                />
            ))}
          </SpeedDial>
        </div>
      </div>
    );
  }
}

SpeedDials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default addStyles(SpeedDials);

