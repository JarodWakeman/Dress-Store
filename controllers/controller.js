const Product = require('../model/Product');
const Catergories = require('../model/Categories')


const handleNewProduct = async (req, res) => {
    const {name, description, price, quantity, category} = req.body;
    if (!name || !description || !price || !quantity || !category) return res.status(400).json({'message': 'Name, Description, price, quantity, and catergory are required'})
    const duplicate = await Product.findOne({name: name}).exec();
    if (duplicate) return res.sendStatus(409);

    try {
        const result = await Product.create({
            "name": name,
            "price": price,
            "quantity": quantity,
            "description": description,
            "category": category
        });

        res.status(201).json({'success': `New Prooduct ${Product} created!`});
    } catch (err) {
        res.status(500).json({ 'message' : err.message});
    }
}