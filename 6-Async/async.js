
console.log('before')

getUser(10, user => {
    console.log("my user : ", user)
    getProduct(user.id, products => console.log('products: ', products))
});

console.log('between')
console.log('after')

function getUser(id, callback) {
    setTimeout(() => {
        console.log('retreive data from database')
        return callback({ id: id, name: "Mohamed IDBRAHIM" })
    }
        , 2000)
}

function getProduct(userId, callback) {
    setTimeout(() => {
        console.log('retreive products from database')
        return callback(['p1', 'p2'])
    }
        , 2000)
}