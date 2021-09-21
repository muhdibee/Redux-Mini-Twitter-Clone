
import logger from './logger'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const rootMiddleware = applyMiddleware(thunk,logger)