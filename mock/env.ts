import {resolve} from 'path'
require('dotenv').config({path: resolve(process.cwd(), '.env.') + process.env.NODE_ENV})
