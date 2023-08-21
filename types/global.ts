type OnlyfinProfile = {
    id: number,
    username: string
}

type OnlyfinProfileSubInfo = {
    id: number,
    username: string,
    isSubscribed: boolean,
    subscriptionCount: number
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
    stock: OnlyfinStock,
    categories: OnlyfinUserCategoryTab[]
}

type OnlyfinUserCategoryTab = {
    userCategoryId: number,
    categoryName: string,
    modules: OnlyfinModule[]
}

type OnlyfinModule = {
    id: number,
    targetCategoryId: number,
    height: number,
    width: number,
    xAxis: number,
    yAxis: number,
    type: string,
    content: any
}

type ModuleLayoutUpdateBatchDTO = {
    moduleId: number,
    height: number,
    width: number,
    xAxis: number,
    yAxis: number
}

type TableCell = { value: string }[][];

type DataElement = { value: any };

type DataArray = DataElement[];

type OnlyfinHighchartsChart = {chart: {type: string}, title: {text: string}, xAxis: {categories: string[], title: {text: string}}, yAxis: {title: {text: string}}, series: (string[] | number[])[]}