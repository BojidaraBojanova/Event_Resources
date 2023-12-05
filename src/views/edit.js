import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const editTemp = (item)=> html`
    <section id="edit">
          <div class="form">
            <h2>Edit Event</h2>
            <form @submit=${submitHandler} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
                value=${item.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image"
                value=${item.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
                value=${item.category}
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${item.description}</textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
              value=${item.date}
            />

              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;
let context = null;
let eventId = "";
export async function showEditView(ctx){
    const id = ctx.params.id;
    const data = await dataService.getSingleEvent(id);
    ctx.render(editTemp(data));
    context = ctx;
    eventId = id;
}

async function submitHandler(e){
    e.preventDefault();

    const formData = new FormData(e.target)
    const{name, imageUrl, category, description, date} = Object.fromEntries(formData);

    if(!name || !imageUrl || !category || !description || !date){
        return window.alert("Error");
    }

    try {
        await dataService.updateEvent(eventId,{name, imageUrl, category, description, date})
        context.goTo(`/details/${eventId}`);
    } catch (error) {
        window.alert("Error!")
    }
}