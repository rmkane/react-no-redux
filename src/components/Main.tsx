import {} from "react";

import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div id="detail" className="flex-1 p-4">
      <Outlet />
    </div>
  );
}

export default Main;
