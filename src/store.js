import { seedData } from './seed.js' 
export const store = {
    state: {
        seedData
    },
    getActivate(){
        return this.state.seedData.find((day) => day.active );
    },
    setActivate(dayId){
        this.state.seedData.map((dayObj) => dayObj.id === dayId ? dayObj.active = true : dayObj.active = false );
    }
}