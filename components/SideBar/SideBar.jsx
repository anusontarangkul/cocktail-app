import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { CocktailState } from '../../CocktailContext';
import Content from './Content';
import styles from './SideBar.module.css';

export default function SideBar() {
  const { user } = CocktailState();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          {user ? (
            <Avatar
              onClick={toggleDrawer(anchor, true)}
              style={{
                height: 38,
                width: 38,
                cursor: 'pointer',
                backgroundColor: '#EEBC1D',
              }}
              src={user.photoURL}
              alt={user.displayName || user.email}
            />
          ) : (
            <p onClick={toggleDrawer(anchor, true)} className={styles.login}>
              Login
            </p>
          )}

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Content
              state={state}
              setState={setState}
              anchor={anchor}
              toggleDrawer={toggleDrawer}
            />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
