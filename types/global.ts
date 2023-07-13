type OnlyfinModule = {
    targetCategoryId: number,
    height: number,
    width: number,
    xAxis: number,
    yAxis: number,
    type: string,
    content: JSON
}

type OnlyfinProfile = {
    id: number,
    username: string
}

type OnlyfinProfileSubInfo = {
    id: number,
    username: string,
    isSubscribed: boolean
}

type OnlyfinProfileSubInfoAboutMe = {
    id: number,
    username: string,
    isSubscribed: boolean,
    aboutMe: string
}