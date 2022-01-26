export const btnFunk = {
    switch: (route, setURL, on, off) => {
        on(false);

        if (route) {
            setURL(route);

            return;
        }

        off(true);
    }
}