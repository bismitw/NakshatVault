import {User} from "../models/user.models.js"
import {ApiError} from "../utils/apiError.utils.js"

const registerUserService = async({name, email, password, })