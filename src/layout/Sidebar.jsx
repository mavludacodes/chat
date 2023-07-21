import React from "react";

function Sidebar({ activeChats, setState, currentChat }) {
  const handleClick = (e, user) => {
    e.preventDefault();
    setState((state) => ({
      ...state,
      currentChat: user,
    }));
    localStorage.setItem("currentChat", JSON.stringify(user));
  };

  return (
    <aside className="w-[300px] overflow-auto">
      <ul>
        {activeChats &&
          activeChats.map((el, index) => (
            <li
              key={index}
              className={
                currentChat && currentChat.user.id == el.user.id
                  ? "h-[50px] bg-yellow-200 p-3 border-b-[1px] cursor-pointer"
                  : "h-[50px]  hover:bg-slate-200 p-3 border-b-[1px] cursor-pointer"
              }
              onClick={(e) => handleClick(e, el)}
            >
              <p>{el.user.name}</p>
            </li>
          ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
