import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemp = (item, isOwner, isLoggedIn, isGoing, goingCount)=> html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.name}</p>
            <p id="details-category">
              Category: <span id="categories">${item.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${item.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span
                  >${item.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">${goingCount}</span> times.</h3>
            <div id="action-buttons">
            ${isOwner ? html`
                <!--Edit and Delete are only for creator-->
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a href="" id="delete-btn" @click=${delEvent}>Delete</a>
            `: isLoggedIn && !isGoing ? html`<a @click=${goToEvent} href="" id="go-btn">Going</a>` : ""}
                          
            </div>
          </div>
        </section>
`;
let context = null;
export async function showDetailsView(ctx){
    const id = ctx.params.id;
    const data = await dataService.getSingleEvent(id);
    const userData = userHelper.getUserData();

    let isLoggedIn = !!userData;
    let isOwner;
    let isGoing;

    if(isLoggedIn){
        isOwner = userHelper.getUserID() === data._ownerId;
        isGoing = await dataService.isGoing(id, userHelper.getUserID());
    }

    let goingCount = await dataService.getGoingCount(id);
    ctx.render(detailsTemp(data, isOwner, isLoggedIn, isGoing, goingCount));
    context = ctx;
}
async function delEvent(e){
    
    e.preventDefault();

    const confirmed = window.confirm("Are you sure you want to delete the event?");

    if(confirmed) {
        const id = context.params.id;
        await dataService.deleteEvent(id);
        context.goTo("/dashboard");
    }
}
async function goToEvent(e){
    e.preventDefault();
    const id = context.params.id;
    await dataService.goToEvent(id);
    let goingCount = await dataService.getGoingCount(id);
    document.getElementById('go-btn').innerText = goingCount;
    context.goTo(`/details/${id}`)
}