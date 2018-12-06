import { seedData } from './seed.js' 
export const store = {
    state: {
        seedData
    },
    getActiveDay(){
        return this.state.seedData.find((day) => day.active );
    },
    setActiveDay(dayId){
        this.state.seedData.map((dayObj) => dayObj.id === dayId ? dayObj.active = true : dayObj.active = false );
    },
    submitEvent (eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({'details':eventDetails,"edit":false});
    },
    editEvent (dayId,eventDetails) {
        const dayObj = this.state.seedData.find( day => day.id === dayId);
        const eventObj = dayObj.events.find( event => event.details === eventDetails);
        eventObj.edit = true;
    },
    updateEvent (dayId,eventDetails,newEventDetails) {
        const dayObj = this.state.seedData.find( day => day.id === dayId);
        const eventObj = dayObj.events.find( event => event.details === eventDetails);
        eventObj.details = newEventDetails;
        eventObj.edit = false;
    },
    deleteEvent (dayId,eventDetails) {
        const dayObj = this.state.seedData.find( day => day.id === dayId);
        const eventIndex = dayObj.events.findIndex( event => event.details = eventDetails );
        dayObj.events.splice(eventIndex,1);        
    }
}