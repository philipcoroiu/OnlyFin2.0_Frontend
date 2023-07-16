type OnlyfinProfile = {
    id: number,
    username: string
}

type OnlyfinProfileSubInfo = {
    id: number,
    username: string,
    isSubscribed: boolean
}

type OnlyfinProfileExtended = {
    id: number,
    username: string,
    isSubscribed: boolean,
    aboutMe: string,
    self: boolean
}

type OnlyfinReview = {
    id: number,
    reviewText: string,
    target: OnlyfinProfile,
    author: OnlyfinProfile,
    isAuthor: boolean
}

type OnlyfinStock = {
    id: number,
    name: string,
    ticker: string
}

type OnlyfinUserStock = {
    id: number,
    stock: OnlyfinStock
}

type OnlyfinUserStockTab = {
    userStockId: number,
    categories: OnlyfinUserCategoryTab[]
}

type OnlyfinUserCategoryTab = {
    userCategoryId: number,
    categoryName: string
    modules: OnlyfinModule[]
}

type OnlyfinModule = {
    targetCategoryId: number,
    height: number,
    width: number,
    xAxis: number,
    yAxis: number,
    type: string,
    content: JSON
}