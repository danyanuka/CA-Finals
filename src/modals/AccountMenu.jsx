import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "/src/store/actions/app.actions";
import { useNavigate } from "react-router-dom";

import { UserAvatar } from "./../cmp/UserAvatar";

export function AccountMenu() {
  const user = useSelector((storeState) => storeState.userModule.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onClose() {
    dispatch(closeModal());
  }

  function onLogout() {
    onClose();
    navigate("/logout");
  }
  return (
    <div className="account-menu" onBlur={onClose}>
      <h2>ACCOUNT</h2>
      <div className="menu-header user-info">
        <div className="user-avatar">
          <UserAvatar userFullName={user?.fullname} userImg={user?.imgUrl} />
        </div>
        <div className="username">
          <p>{user?.fullname}</p>
        </div>
      </div>
      <div className="menu-footer">
        <button onClick={onLogout}>Log out</button>
      </div>
    </div>
  );
}
