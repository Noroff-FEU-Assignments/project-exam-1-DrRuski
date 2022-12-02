import { main } from "../containers/containers.js";

export function errorWarningDisplay(error) {
  main.innerHTML = `<div class="errorDisplayContainer flex-vert">
                          <i class="fa-solid fa-circle-exclamation warningIcon"></i>
                          <h1>${error}</h1>
                          <h3>Mega Error 404 Happened, calling in the monkey squad to fix this!</h3>
                          <button onClick="window.location.reload();" class="errorDisplayRefreshBtn">Press to refresh. <i class="fa-solid fa-rotate"></i></button> 
                        <div>`;
}
