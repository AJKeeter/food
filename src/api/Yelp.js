import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer jQwfz6HFCS7T104UJ1uRbpUsgFEn-nWv9T2BkVgcBNs3wNz6qpJ3X0oXf71a-VFllfdoYUOz8wFNa50CiVxvH0dfYGVZs584Q_plFQftvj4LM2sWYT3H9HCFt_NGXnYx'
    }
});
