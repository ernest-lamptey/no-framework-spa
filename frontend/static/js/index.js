const router = async () => {
    const routes = [
        {path: "/", view: () => console.log("Viewing Home")},
        {path: "/work", view: () => console.log("Viewing Work")},
        {path: "/contact", view: () => console.log("Viewing Contact")},
        {path: "/404", view: () => console.log("Viewing 404")}
    ]

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if (!match) {
        match = {
            route: routes[3],
            isMatch: true
        }
    }

    console.log(match.route.view());
};

document.addEventListener("DOMContentLoaded", () => {
    router();
})