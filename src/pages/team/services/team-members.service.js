class TeamMembersService {
    constructor(){}

    async getMembers() {
        return [
            {
                image: "https://raw.githubusercontent.com/AplicacionesWeb-WX54/si730-WX54-Grupo1-Repository/main/assets/members-profile/Manuel.jpg",
                name: "Rosa Dita",
                email: "rosadita@hotmans.com"
            },
            {
                image: "https://raw.githubusercontent.com/AplicacionesWeb-WX54/si730-WX54-Grupo1-Repository/main/assets/members-profile/arigeimpleis.jpg",
                name: "Arigeimpleis",
                email: "arigeimpleis@hotmans.com"
            },
            {
                image: "https://raw.githubusercontent.com/AplicacionesWeb-WX54/si730-WX54-Grupo1-Repository/main/assets/members-profile/nekolas-profile.png",
                name: "Nicola Hotman",
                email: "nicola@hotmans.com"
            },
            {
                image: "https://raw.githubusercontent.com/AplicacionesWeb-WX54/si730-WX54-Grupo1-Repository/main/assets/members-profile/pelufoto.png",
                name: "Oala Yesi",
                email: "oalayesi@hotmans.com"
            },
            {
                image: "https://avatars.githubusercontent.com/u/129230632?v=4",
                name: "Blanqui Tita",
                email: "blanquita@hotmans.com"
            }
        ]
    }
}

export default TeamMembersService;