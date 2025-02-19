import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdDocumentScanner,
  MdOutlinePeople,
  MdPageview,
  MdOutlineSettings,
  MdMedication,
  MdOutlineShoppingBag,
  MdDynamicForm,
  MdOutlineDynamicForm,
  MdDescription,
  MdPreview,
} from "react-icons/md";

export const menuItems = [
  {
    name: "Blogs",
    path: "/admin/blogs",
    icon: <MdDocumentScanner size={20} />,
    roles: ["admin", "editor", "subscriber"],
  },
  {
    name: "All Responses",
    path: "/admin/contacts",
    icon: <MdDescription size={20} />,
    roles: ["admin", "editor"],
  },
  {
    name: "All Bookings",
    path: "/admin/appointments",
    icon: <MdDescription size={20} />,
    roles: ["admin", "editor"],
  },
  {
    name: "Manage Services",
    path: "/admin/service",
    icon: <MdDescription size={20} />,
    roles: ["admin", "editor"],
  },
  {
    name: "Settings",
    path: "/admin/profile",
    icon: <MdOutlineSettings size={20} />,
    roles: ["admin", "editor", "subscriber"],
  },
  {
    name: "View Site",
    path: "/",
    icon: <MdPageview size={20} />,
    roles: ["admin", "editor", "subscriber"],
  },
];
