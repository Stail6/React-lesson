type ProductProps = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray: ProductProps[] = [
    {
        title: 'iPhone 8 Pro',
        description:"This is iPhone 8 pro",
        type:"phone",
        capacity:"256-1",
        price: 800,
    },
    {
        title: 'iPhone 10 Pro',
        description:"This is iPhone 10 pro",
        type:"phone",
        capacity:"256-2",
        price: 1000,
    },
    {
        title: 'iPhone 11 Pro',
        description:"This is iPhone 11 pro",
        type:"phone",
        capacity:"256-3",
        price: 1100,
    },
    {
        title: 'iPhone 12 Pro',
        description:"This is iPhone 12 pro",
        type:"phone",
        capacity:"256-4",
        price: 1200,
    },
    {
        title: 'iPhone 13 Pro',
        description:"This is iPhone 13 pro",
        type:"phone",
        capacity:"256-5",
        price: 1300,
    },
    {
        title: 'iPhone 14 Pro',
        description:"This is iPhone 14 pro",
        type:"phone",
        capacity:"256-6",
        price: 1400,
    },
]

export default productsArray
