import "./sidebar.css";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import EventIcon from "@material-ui/icons/Event";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import SchoolIcon from "@material-ui/icons/School";
import ChatIcon from "@material-ui/icons/Chat";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import GroupIcon from "@material-ui/icons/Group";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriends/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideoCallIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        {/* <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}
