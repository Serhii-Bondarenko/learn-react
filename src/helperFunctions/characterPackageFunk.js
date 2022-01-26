export const multipleCharacters = {
    getRandom: (num) => {
        let characterArr = [];
        while (characterArr.length < num) {
            let r = Math.floor(Math.random() * 100) + 1;
            if (characterArr.indexOf(r) === -1) characterArr.push(r);
        }
        return characterArr;
    },

    getByLinksArr : (arr) => {
        let out = [];
        arr.forEach(link => {
            const endPoint = link.split('/');
            out.push(endPoint[endPoint.length-1]);
        })
        return out;
    }

}