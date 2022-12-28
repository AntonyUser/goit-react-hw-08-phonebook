import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { logOut } from 'redux/auth/operations';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>{user.name}</p>
      <Button
        variant="outlined"
        size="small"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
