import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const dashboardTemp = (data)=>html`
<h2>Current Events</h2>
    ${data.length > 0 ? html`
        <section id="dashboard">
          ${data.map(item=>cardTemp(item))}
        </section>
        `: html`<h4>No Events yet.</h4>`
    }
        
         <!-- Display an h4 if there are no posts -->
`;

const cardTemp = (item) => html`
        <div class="event">
            <img src=${item.imageUrl} />
            <p class="title">
            ${item.name}
            </p>
            <p class="date">${item.date}</p>
            <a class="details-btn" href="/details/${item._id}">Details</a>
        </div>
`

export async function showDashboardView(ctx){
    const data = await dataService.getAllEvents();
    ctx.render(dashboardTemp(data));
}