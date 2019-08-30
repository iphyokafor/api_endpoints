import EventModel from '../models/Event';

const Event = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} event object 
   */
  addPost(req, res) {
    if (!req.body.title && !req.body.description && !req.body.guests && !req.body.location) {
      return res.status(400).json({
          'status': 'failed',
          'message': 'All fields are required'
        })
    }
    const data = EventModel.create(req.body);
    return res.status(201).json({
        'status': 'success',
        'message': 'Event added successfully',
        data: data
    });
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} events array
   */
  getAll(req, res) {
    const data = EventModel.findAll();
    return res.status(200).json({
        'status': 'success',
        'message': 'View all events',
        data: data
    });
  },
  }

export default Event;