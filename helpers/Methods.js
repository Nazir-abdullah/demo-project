export const getBackground = background => {
    switch (background) {
        case "grass":
            return "rgb(124,199,65)";
        case "fire":
            return "rgb(251,192,111)";
        case "normal":
            return "white";
        case "water":
            return "rgb(168,210,222)";
        case "bug":
            return "rgb(245,109,118)";
        case "ground":
            return "var( --color-beigeLight)";
        case "electric":
            return "rgb(220,194,0)";
        case "rock":
            return "rgba(133,137,140, 0.6)";
        case "poison":
            return "rgba(205,144,189, 0.6)";
        case "fighting":
            return "rgba(163,98,60, 0.8)";
        case "ghost":
            return "rgba(102,68,151, 0.6)";
        case "psychic":
            return "rgb(215,164,0)";
        case "ice":
            return "rgb(120,180,222, 0.3)";
        default:
            return "var(--color-primaryLight)";
    }
};
