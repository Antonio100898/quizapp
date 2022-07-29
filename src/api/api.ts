import axios from "axios";

const instance = axios.create({
    baseURL: `https://opentdb.com/`,
})

export const api = {
    getCategories: () => {
        return instance.get("api_category.php")
    },
    getToken: () => {
        return instance.get("api_token.php?command=request")
    },
    getQuestions(amount: string, category: string, difficulty: string, token: string) {
        let url = `api.php?amount=${amount}`
        if (category) url += "&category=" + category
        if (difficulty) url += "&difficulty=" + difficulty
        url += "&encode=base64" + "&token=" + token
        return instance.get(url)
    }
}