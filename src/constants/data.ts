const packagesList = [
    {
        id: 1,
        title: "One",
        price: "30",
        tagLine: "1 hour of individual chatting or coaching",
        target: "/packages?id=1",
    }
    ,
    {
        id: 2,
        title: "Two",
        price: "140",
        tagLine: "5 hour of individual chatting or coaching",
        target: "/packages?id=2",
    }
    ,
    {
        id: 3,
        title: "Three",
        price: "270",
        tagLine: "10 hour of individual chatting or coaching",
        target: "/packages?id=3",
    }
    ,
    {
        id: 4,
        title: "Four",
        price: "400",
        tagLine: "15 hour of individual chatting or coaching",
        target: "/packages?id=4",
    }
    ,
    {
        id: 5,
        title: "Five",
        price: "510",
        tagLine: "20 hour of individual chatting or coaching",
        target: "/packages?id=5",
    }
    ,
    {
        id: 6,
        title: "Sixth",
        price: "640",
        tagLine: "25 hour of individual chatting or coaching",
        target: "/packages?id=6",
    }
];

export const getPackageById = (id: number) => {
    const target = packagesList.find((obj) => obj.id === id);
    return target;
}