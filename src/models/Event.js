import uuid from 'uuid';

class Event {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.events = [];
  }
  /**
   * 
   * @returns {object} event object
   */
  create(data) {
    const newEvent = {
      id: uuid.v4(),
      title: data.title || '',
      description: data.description || '',
      guests: data.guests || '',
      location: data.location || '',
      Date: Date.now()
    };
    this.events.push(newEvent);
    return newEvent
  }
  
  /**
   * @returns {object} returns all events
   */
  findAll() {
    return this.events;
  }
  
}
export default new Event();