import getListBannerService from "./getListBanner"
import CinemaService from "./listCinemaService"
import ListFilmService from "./listFilmService"
import UserService from "./userService"
const API = {
    user : new UserService(),
    listFilm: new ListFilmService(),
    banner: new getListBannerService(),
    cinema: new CinemaService()
}
export default API