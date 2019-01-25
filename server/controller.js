module.exports = {
    getInventory: (req,res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_inventory()
        .then((inventory) => {res.status(200).send(inventory)})
        .catch((err) => res.status(500).send(err))
    },
    
    postProduct: (req,res,next) => {
        const dbInstance = req.app.get('db')
        const newProduct = {
            name: req.body.product_name,
            price: req.body.price,
            image: req.body.image_url
        }

        console.log(newProduct)
        dbInstance.create_product([req.body.product_name, req.body.price, req.body.image_url])
        .then(() => {res.sendStatus(200)})
        .catch((err) => {res.status(500).send(err)})
    },

    deleteProduct: (req,res,next) => {
        const {params} = req;
        const dbInstance = req.app.get('db');

        dbInstance.delete_product([params.id])
        .then(() => {res.sendStatus(200)})
        .catch((err) => {res.status(500).send(err)})
    }
}