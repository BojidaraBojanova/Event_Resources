import { api } from "./api.js"

const dataEndPoints = {
    getAll: "data/events?sortBy=_createdOn%20desc",
    singleEvent: "data/events"
}

async function getAllEvents(){
    return api.get(dataEndPoints.getAll);
}

async function getSingleEvent(id){
    return api.get(dataEndPoints.singleEvent + '/' + id);
}

async function createEvent(data){
    return api.post(dataEndPoints.singleEvent, data);
}

async function updateEvent(id, data){
    return api.put(dataEndPoints.singleEvent + '/' + id, data);
}

async function deleteEvent(id){
    return api.del(dataEndPoints.singleEvent + "/" + id);
}

async function goToEvent(eventId){
    return api.post("data/going", {eventId})
}

async function getGoingCount(eventId){
    return api.get(`data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`)
}

async function isGoing(eventId, userId){
    return api.get(`data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`)

}
export const dataService = {
    getAllEvents,
    getSingleEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    goToEvent,
    getGoingCount,
    isGoing

}